// client/src/pages/NotFound.tsx
import * as React from "react";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <SEO
        title="Page Not Found"
        description="The page you requested could not be found."
        url="/404"
        noindex
      />
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Page not found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
    </div>
  );
}
