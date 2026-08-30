import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import AppLink from "./AppLink";
import { useRouter } from "../router";

const links = [
  { href: "/", label: "Start" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/meny", label: "Meny" },
  { href: "/galleri", label: "Galleri" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const { pathname } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-solid" : ""}`}>
      <AppLink
        href="/"
        className="wordmark"
        ariaLabel="Birria Seoul startsida"
        onClick={handleBrandClick}
      >
        <img
          src="/images/Loggo.png"
          alt="Birria Seoul"
          style={{ width: "120px", height: "60px", objectFit: "contain" }}
        />
      </AppLink>

      <nav className="desktop-nav" aria-label="Huvudmeny">
        {links.map((link) => (
          <AppLink key={link.href} href={link.href}>
            {link.label}
          </AppLink>
        ))}
      </nav>

      <a
        className="header-order"
        href="https://www.foodora.se/restaurant/ui2b/birria-seoul"
        target="_blank"
        rel="noreferrer"
      >
        Beställ <ArrowUpRight size={17} />
      </a>

      <button
        type="button"
        className="mobile-trigger"
        aria-label="Öppna meny"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu />
      </button>

      {isMenuOpen ? (
        <div className="mobile-sheet-root" role="dialog" aria-modal="true">
          <button
            type="button"
            className="mobile-sheet-backdrop"
            aria-label="Stäng meny"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="mobile-sheet">
            <button
              type="button"
              className="mobile-close"
              aria-label="Stäng meny"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={20} />
            </button>
            <div className="mobile-wordmark">
              <AppLink href="/">
                <img
                  src="/images/Loggo.png"
                  alt="Birria Seoul"
                  style={{ width: "160px", height: "80px", objectFit: "contain" }}
                />
              </AppLink>
            </div>
            <nav className="mobile-nav" aria-label="Mobilmeny">
              {links.map((link, index) => (
                <AppLink
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                >
                  <small>0{index + 1}</small>
                  {link.label}
                </AppLink>
              ))}
            </nav>
            <a
              className="button button-hot"
              href="https://www.foodora.se/restaurant/ui2b/birria-seoul"
              target="_blank"
              rel="noreferrer"
            >
              Beställ nu <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
