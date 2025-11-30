// client/src/components/ui/progress.tsx
import * as React from "react";

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

export function Progress({ value = 0, ...props }: ProgressProps) {
  return (
    <div
      {...props}
      style={{
        width: "100%",
        backgroundColor: "#eee",
        height: "0.5rem",
        borderRadius: "999px",
        overflow: "hidden",
        ...(props.style || {}),
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          backgroundColor: "#555",
        }}
      />
    </div>
  );
}

export default Progress;
