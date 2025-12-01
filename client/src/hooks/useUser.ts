// client/src/hooks/useUser.ts

export interface User {
  name?: string;
  email?: string;
}

export function useUser(): User | null {
  // No real auth wired up yet – always "logged out"
  return null;
}
