import { useEffect, useState } from "react";

export type AuthUser = {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
};

type AuthMeResponse = {
  clientPrincipal: AuthUser | null;
};

export function useUser() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/.auth/me", { credentials: "include" });
        const data = (await res.json()) as AuthMeResponse;

        if (!cancelled) setUser(data?.clientPrincipal ?? null);
      } catch {
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { user, isLoading, isAuthenticated: !!user };
}
