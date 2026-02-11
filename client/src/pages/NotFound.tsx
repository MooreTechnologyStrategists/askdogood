// client/src/pages/NotFound.tsx
import * as React from "react";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Ask DoGood"
        description="The page you're looking for doesn't exist"
        url="/404"
        noindex={true}
      />
      <div style={{ padding: "4rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Page not found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
      </div>
    </>
  );
}
