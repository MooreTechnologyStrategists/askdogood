// client/src/components/ui/label.tsx
import * as React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, ...props }: LabelProps) {
  return <label {...props}>{children}</label>;
}

export default Label;
