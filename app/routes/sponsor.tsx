import { useState } from "react";
import { 
  json, 
  redirect, 
  type LoaderFunctionArgs, 
  type ActionFunctionArgs, 
  type LinksFunction 
} from "@remix-run/node";
import { useLoaderData, useActionData, useNavigation, Form } from "@remix-run/react";
import { pool } from "~/db.server";

// Import CSS/SCSS Stylesheets
import scroll from "~/style/scss/components/showscroll.css";
import sponsorStyles from "~/style/scss/sponsor.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: scroll },
  { rel: "stylesheet", href: sponsorStyles },
];

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    // Fetch dates where sponsorships are already booked or pending from app.sponsorships
    const result = await pool.query(
      `SELECT TO_CHAR(booking_date, 'YYYY-MM-DD') as date 
       FROM app.sponsorships 
       WHERE status IN ('confirmed', 'paid', 'pending')`
    );
    const bookedDates = result.rows.map((row) => row.date);
    return json({ bookedDates, cpmRate: "$250 / issue" });
  } catch (error) {
    console.error("Failed to load booked dates:", error);
    return json({ bookedDates: [], cpmRate: "$250 / issue" });
  }
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const selectedDate = formData.get("selectedDate") as string;
  const sponsorName = formData.get("sponsorName") as string;
  const sponsorEmail = formData.get("sponsorEmail") as string;
  const websiteUrl = formData.get("websiteUrl") as string;
  const headline = formData.get("headline") as string;
  const bodyCopy = formData.get("bodyCopy") as string;

  if (!selectedDate || !sponsorName || !sponsorEmail || !headline || !bodyCopy) {
    return json({ error: "Please complete all required fields and select a date." }, { status: 400 });
  }

  try {
    await pool.query(
      `INSERT INTO app.sponsorships 
       (booking_date, sponsor_name, sponsor_email, website_url, headline, body_copy, status)
       VALUES ($1, $2, $3, $4, $5, $6, 'pending')`,
      [selectedDate, sponsorName, sponsorEmail, websiteUrl, headline, bodyCopy]
    );

    return json({
      success: true,
      message: "Sponsorship reserved! We will review your ad copy and follow up shortly.",
    });
  } catch (error: any) {
    if (error.code === "23505") {
      return json({ error: "This date was just taken. Please select another date." }, { status: 400 });
    }
    return json({ error: "Database error. Please try again." }, { status: 500 });
  }
}

export default function Sponsor() {
  const { bookedDates, cpmRate } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Date calculation helpers
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDayOfWeek = new Date(year, month, 1).getDay();

  const handleDateClick = (dateStr: string) => {
    if (bookedDates.includes(dateStr)) return;
    setSelectedDate(dateStr);
  };

  return (
    <div className="sponsor-container">
      <header className="sponsor-header">
        <h1>Advertise on The Poast</h1>
        <p className="subheading">Book your sponsorship spot in our daily newsletter.</p>
        <div className="stats-badge">
          <span>Rate: {cpmRate}</span>
        </div>
      </header>

      {actionData?.success ? (
        <div className="success-banner">
          <h2>Request Received!</h2>
          <p>{actionData.message}</p>
        </div>
      ) : (
        <main className="sponsor-grid">
          {/* CALENDAR PICKER */}
          <section className="calendar-card">
            <h2>1. Select Available Date</h2>
            <div className="calendar-controls">
              <button
                type="button"
                onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}
              >
                &larr; Prev
              </button>
              <h3>
                {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
              </h3>
              <button
                type="button"
                onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}
              >
                Next &rarr;
              </button>
            </div>

            <div className="calendar-grid">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="calendar-header-day">
                  {day}
                </div>
              ))}

              {/* Offset empty slots for the first day of the month */}
              {Array.from({ length: startDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="calendar-day empty" />
              ))}

              {/* Render actual days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const formattedMonth = String(month + 1).padStart(2, "0");
                const formattedDay = String(dayNum).padStart(2, "0");
                const fullDateStr = `${year}-${formattedMonth}-${formattedDay}`;

                const isBooked = bookedDates.includes(fullDateStr);
                const isSelected = selectedDate === fullDateStr;

                return (
                  <button
                    key={fullDateStr}
                    type="button"
                    disabled={isBooked}
                    className={`calendar-day ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""}`}
                    onClick={() => handleDateClick(fullDateStr)}
                  >
                    <span className="day-number">{dayNum}</span>
                    <span className="status-label">
                      {isBooked ? "Sold Out" : isSelected ? "Selected" : "Available"}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* AD CREATIVE FORM */}
          <section className="form-card">
            <h2>2. Copy & Details</h2>
            <Form method="post">
              <input type="hidden" name="selectedDate" value={selectedDate} />

              <div className="form-group">
                <label htmlFor="selectedDateDisplay">Selected Date *</label>
                <input
                  id="selectedDateDisplay"
                  type="text"
                  readOnly
                  value={selectedDate || "Please pick a date on the calendar"}
                  className="date-display"
                />
              </div>

              <div className="form-group">
                <label htmlFor="sponsorName">Company / Sponsor Name *</label>
                <input type="text" id="sponsorName" name="sponsorName" required placeholder="Acme Inc." />
              </div>

              <div className="form-group">
                <label htmlFor="sponsorEmail">Email Address *</label>
                <input type="email" id="sponsorEmail" name="sponsorEmail" required placeholder="adrian@acme.com" />
              </div>

              <div className="form-group">
                <label htmlFor="websiteUrl">Destination URL *</label>
                <input type="url" id="websiteUrl" name="websiteUrl" required placeholder="https://acme.com" />
              </div>

              <div className="form-group">
                <label htmlFor="headline">Ad Headline *</label>
                <input type="text" id="headline" name="headline" required maxLength={60} placeholder="Catchy headline (60 chars max)" />
              </div>

              <div className="form-group">
                <label htmlFor="bodyCopy">Ad Copy / Body Text *</label>
                <textarea id="bodyCopy" name="bodyCopy" rows={4} required placeholder="Your main pitch or text..."></textarea>
              </div>

              {actionData?.error && <p className="error-message">{actionData.error}</p>}

              <button
                type="submit"
                disabled={!selectedDate || navigation.state === "submitting"}
                className="submit-btn"
              >
                {navigation.state === "submitting" ? "Reserving..." : "Reserve Date & Proceed"}
              </button>
            </Form>
          </section>
        </main>
      )}
    </div>
  );
}