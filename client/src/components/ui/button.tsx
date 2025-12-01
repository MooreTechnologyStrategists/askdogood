// client/src/components/ui/button.tsx
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ asChild, children, ...props }: ButtonProps) {
  // We ignore `asChild` for now and always render a native button
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default Button;
