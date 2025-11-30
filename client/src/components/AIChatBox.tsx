// client/src/components/ui/button.tsx
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => (
    <button
      ref={ref}
      className={className}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export default Button;
