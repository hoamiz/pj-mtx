import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonClasses = {
  primary:
    "inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-paper",
  secondary:
    "inline-flex min-h-11 items-center justify-center rounded-md border border-brand px-4 py-2 text-sm font-semibold text-brand bg-paper",
} as const;

type Variant = keyof typeof buttonClasses;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  onClick,
}: ButtonLinkProps) {
  const classes = cn(buttonClasses[variant], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonClasses[variant], className)}
      {...props}
    />
  );
}
