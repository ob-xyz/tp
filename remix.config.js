const fs = require("fs");
const path = require("path");

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "netlify",
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],

routes(defineRoutes) {
  return defineRoutes((route) => {
    route("/:company", "routes/custom/$company.tsx");
    route("/:company/book", "routes/custom/$company.book.tsx");
    route("/custom/:company/preview", "routes/custom/$company.preview.tsx");
    route("/custom/:company/storyboard", "routes/custom/$company.storyboard.tsx");
  });
},
};