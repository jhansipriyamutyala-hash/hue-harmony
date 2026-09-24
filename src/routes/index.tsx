import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The Chroma color picker lives as a pure HTML5/CSS3/JS app under /app/.
// Redirect the root route to it.
export const Route = createFileRoute("/")({
  component: Redirect,
});

function Redirect() {
  useEffect(() => {
    window.location.replace("/app/index.html");
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        background: "#0f1220",
        color: "#9aa0c0",
      }}
    >
      Opening Chroma…
    </div>
  );
}
