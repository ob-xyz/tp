import { Link } from "@remix-run/react";

export default function Footer() {
  return (
      <footer className="footer">
         <Link to="/policies/privacy">
         Privacy Policy
        </Link> 
        <Link to="/policies/terms">
          Terms and Conditions
        </Link>
        <a href="thepoast.com/advertise">
          Advertise
        </a> 
      </footer>
  );
}
