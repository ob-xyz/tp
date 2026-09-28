import { useEffect, useState } from "react";

// This tells TypeScript the tag is okay
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'altcha-widget': any;
    }
  }
}

export default function AltchaWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Load the library only when the component hits the browser
    import("altcha").catch(err => console.error("Altcha load error:", err));
  }, []);

  if (!isMounted) {
    // Return a placeholder of the same size to prevent layout shift
    return <div style={{ height: "80px" }}></div>;
  }

  return (
    <altcha-widget 
      challengeurl="https://app.thepoast.com/api/public/captcha/altcha"
      hidefooter="true"
      hidelogo="true"
    ></altcha-widget>
  );
}