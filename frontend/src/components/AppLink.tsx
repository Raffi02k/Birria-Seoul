import type { MouseEvent, ReactNode } from "react";
import { useRouter } from "../router";

type AppLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export default function AppLink({
  href,
  className,
  children,
  ariaLabel,
  onClick,
}: AppLinkProps) {
  const { navigate } = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:")
    ) {
      return;
    }

    event.preventDefault();
    navigate(href);
  };

  return (
    <a aria-label={ariaLabel} className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
