"use client";

import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  isMagnetic?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    isExternal?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      className,
      children,
      ...rest
    } = props;

    const baseStyles =
      "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-base px-8 py-3.5 gap-2.5",
    }[size];

    const variantStyles = {
      primary:
        "bg-wine text-white shadow-wine hover:bg-wine-hover hover:shadow-lg hover:shadow-wine/30 focus-visible:ring-wine border border-transparent",
      secondary:
        "bg-card text-ink border border-border shadow-editorial hover:border-gold hover:text-wine hover:shadow-gold focus-visible:ring-gold",
      outline:
        "bg-transparent text-ink border border-border/80 hover:border-wine hover:text-wine hover:bg-wine/5 focus-visible:ring-wine",
      gold:
        "bg-gold text-white shadow-gold hover:bg-[#b89557] hover:shadow-lg hover:shadow-gold/30 focus-visible:ring-gold border border-transparent",
      ghost:
        "bg-transparent text-ink-muted hover:text-ink hover:bg-card-subtle focus-visible:ring-wine",
    }[variant];

    const combinedClassName = cn(baseStyles, sizeStyles, variantStyles, className);

    if ("href" in props && props.href) {
      const { href, isExternal, target, rel, ...linkProps } = rest as ButtonAsLink;
      if (isExternal || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={isExternal || href.startsWith("http") ? "_blank" : target}
            rel={isExternal || href.startsWith("http") ? "noopener noreferrer" : rel}
            className={combinedClassName}
            {...linkProps}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          {...linkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
