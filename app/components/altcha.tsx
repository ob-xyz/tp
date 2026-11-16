import { useEffect, useRef } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": any;
    }
  }
}

const ALTCHA_SCRIPT =
  "https://app.thepoast.com/public/static/altcha.umd.js";

let altchaScriptPromise: Promise<void> | null = null;

function loadAltcha(): Promise<void> {
  if (customElements.get("altcha-widget")) {
    return Promise.resolve();
  }

  if (altchaScriptPromise) {
    return altchaScriptPromise;
  }

  altchaScriptPromise = new Promise((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${ALTCHA_SCRIPT}"]`
    );

    if (!script) {
      script = document.createElement("script");
      script.src = ALTCHA_SCRIPT;
      script.type = "module";
      script.async = true;
      document.head.appendChild(script);
    }

    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => {
        altchaScriptPromise = null;
        reject(new Error("Failed to load ALTCHA"));
      },
      { once: true }
    );
  });

  return altchaScriptPromise;
}

export default function AltchaWrapper() {
  const widgetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let mounted = true;

    async function initialize() {
      try {
        await loadAltcha();

        await customElements.whenDefined("altcha-widget");

        if (!mounted || !widgetRef.current) return;

        const widget = widgetRef.current as any;

        widget.configure({
          hideLogo: true,
          hideFooter: true,
        });

        const handleStateChange = (event: Event) => {
          const state = (event as CustomEvent).detail?.state;

          if (state === "verified") {
            widget.classList.add("poast-verified");
          } else {
            widget.classList.remove("poast-verified");
          }
        };

        widget.addEventListener("statechange", handleStateChange);

        // Account for a widget that has already verified.
        if (widget.getState?.() === "verified") {
          widget.classList.add("poast-verified");
        }

        return () => {
          widget.removeEventListener(
            "statechange",
            handleStateChange
          );
        };
      } catch (error) {
        console.error("ALTCHA initialization failed:", error);
      }
    }

    let cleanup: (() => void) | undefined;

    initialize().then((fn) => {
      cleanup = fn;
    });

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, []);

  return (
    <altcha-widget
      ref={widgetRef as any}
      challenge="https://app.thepoast.com/api/public/captcha/altcha"
    />
  );
}