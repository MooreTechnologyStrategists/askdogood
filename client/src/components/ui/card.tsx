// client/src/components/ui/card.tsx
import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ children, ...props }: CardProps) {
  return <div {...props}>{children}</div>;
}

export function CardHeader(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}

export function CardTitle(
  props: React.HTMLAttributes<HTMLHeadingElement>
) {
  const { children, ...rest } = props;
  return <h3 {...rest}>{children}</h3>;
}

/**
 * Added to satisfy imports like:
 * import { CardDescription } from "@/components/ui/card";
 */
export function CardDescription(
  props: React.HTMLAttributes<HTMLParagraphElement>
) {
  const { children, ...rest } = props;
  return <p {...rest}>{children}</p>;
}

export function CardContent(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}

/**
 * Optional but common in these UI patterns – future-proofing.
 */
export function CardFooter(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
}

export default Card;
