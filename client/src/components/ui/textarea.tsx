// client/src/components/ui/textarea.tsx
import * as React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={className} {...props} />
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
