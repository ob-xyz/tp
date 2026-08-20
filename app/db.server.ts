import pg from "pg";

declare global {
  var __db__: pg.Pool | undefined;
}

function createPool(): pg.Pool {
  // 1. Prefer connection string if provided (e.g. Netlify/Production)
  if (process.env.DATABASE_URL) {
    return new pg.Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  // 2. Local fallback using individual environment variables
  return new pg.Pool({
    host: process.env.LISTMONK_DB_HOST || "127.0.0.1",
    port: Number(process.env.LISTMONK_DB_PORT) || 5432,
    database: process.env.LISTMONK_DB_NAME || "listmonk",
    user: process.env.LISTMONK_DB_USER || "postgres",
    // Cast to String to ensure 'undefined' is never passed to SCRAM auth
    password: String(process.env.LISTMONK_DB_PASSWORD || ""),
  });
}

let pool: pg.Pool;

if (process.env.NODE_ENV === "production") {
  pool = createPool();
} else {
  // Reuse existing connection pool across Remix HMR cycles
  if (!global.__db__) {
    global.__db__ = createPool();
  }
  pool = global.__db__;
}

export { pool };