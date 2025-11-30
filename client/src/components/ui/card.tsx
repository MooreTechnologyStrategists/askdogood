// client/src/components/ui/card.tsx
import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ children, ...props }: CardProps) {
  return <div {...props}>{children}</div>;
}

export function CardHeader({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export function CardTitle({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props}>{children}</h3>;
}

export function CardContent({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export default Card;
