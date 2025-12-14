import { useCallback, useEffect, useState } from "react";

export type AuthUser = {
  identityProvider?: string;
  userId?: string;
  userDetails?: string;
  userRoles?: string[];
};

type AuthMeResponse = {
  clientPrincipal: AuthUser | null;
};

export function useUser() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/.auth/me", { credentials: "include" });
      if (!res.ok) {
        setUser(null);
        return;
      }

      const data = (await res.json()) as AuthMeResponse;
      setUser(data?.clientPrincipal ?? null);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    refresh,
  };
}
