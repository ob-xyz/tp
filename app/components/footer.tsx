import { Link } from "@remix-run/react";

export default function Footer() {
  return (
      <footer className="footer">
        <Link to="/">
         Home
        </Link> 
        <a href="/advertise">
          Advertise
        </a> 
        <Link to="/policies/terms">
          Terms and Conditions
        </Link>
         <Link to="/policies/privacy">
         Privacy Policy
        </Link> 
      </footer>
  );
}
