// client/src/hooks/useUser.ts
import { useEffect, useState } from "react";

export interface User {
  name?: string;
  email?: string;
}

type StaticWebAppsMeResponse = {
  clientPrincipal?: {
    userId?: string;
    userDetails?: string; // often email
    identityProvider?: string;
    userRoles?: string[];
    claims?: { typ: string; val: string }[];
  };
};

export function useUser(): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/.auth/me", { credentials: "include" });
        if (!res.ok) {
          if (!cancelled) setUser(null);
          return;
        }

        const data = (await res.json()) as StaticWebAppsMeResponse[];
        const principal = data?.[0]?.clientPrincipal;

        if (!principal) {
          if (!cancelled) setUser(null);
          return;
        }

        // Try to find a friendly name claim
        const nameClaim =
          principal.claims?.find((c) => c.typ.toLowerCase().includes("name"))?.val;

        const email = principal.userDetails;
        const name = nameClaim || email;

        if (!cancelled) setUser({ name, email });
      } catch {
        if (!cancelled) setUser(null);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return user;
}
