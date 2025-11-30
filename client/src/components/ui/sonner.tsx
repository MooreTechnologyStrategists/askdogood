// client/src/components/ui/sonner.tsx
// Simple placeholder Toaster so the frontend can build without next-themes/sonner.

import * as React from "react";

export type ToasterProps = React.HTMLAttributes<HTMLDivElement>;

export function Toaster(_props: ToasterProps) {
  // No-op toaster for now. You can wire up real toasts later.
  return null;
}

export default Toaster;
