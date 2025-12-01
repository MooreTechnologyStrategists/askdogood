// client/src/_core/hooks/useUser.ts
import { useAuth } from "./useAuth";

type BasicUser = {
  id?: string;
  name?: string | null;
  email?: string | null;
  // add any other fields you actually use in the UI
};

/**
 * Safe hook to get the current user.
 * Returns `null` if there is no user or the auth context isn't ready yet.
 */
export function useUser(): BasicUser | null {
  // If useAuth somehow returns undefined, don't blow up
  const auth: any = useAuth ? useAuth() : null;

  if (!auth || typeof auth !== "object") {
    return null;
  }

  // many auth implementations store the current user on `me`
  const me = (auth as { me?: BasicUser }).me;

  if (!me) {
    return null;
  }

  return me;
}
