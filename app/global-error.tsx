"use client";

// Catches errors in the root layout itself. Must render its own <html>/<body>.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c1c1e",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "28px", margin: 0 }}>Something went wrong</h1>
          <p style={{ color: "#b7b3aa", marginTop: "12px" }}>
            Please refresh the page or try again shortly.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "20px",
              background: "#b82325",
              color: "#fff",
              border: "1px solid #8f1b1d",
              padding: "12px 26px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
