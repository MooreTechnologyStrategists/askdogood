// client/src/pages/ShopRedirect.tsx
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ShopRedirect() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/merch");
  }, [setLocation]);
  return null;
}
