import { ArrowUpRight, Camera, MapPin } from "lucide-react";
import AppLink from "./AppLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span>BIRRIA</span>
        <strong>SEOUL</strong>
        <small>Sticky fingers. Seoul heat.</small>
      </div>

      <div className="footer-column">
        <p>Utforska</p>
        <AppLink href="/om-oss">Om oss</AppLink>
        <AppLink href="/meny">Meny</AppLink>
        <AppLink href="/galleri">Galleri</AppLink>
        <AppLink href="/kontakt">Kontakt</AppLink>
        <a href="https://www.instagram.com/birriaseoul/" target="_blank" rel="noreferrer">
          <Camera size={16} /> Instagram
        </a>
      </div>

      <div className="footer-column">
        <p>Beställ</p>
        <a href="https://www.foodora.se/restaurant/ui2b/birria-seoul" target="_blank" rel="noreferrer">
          Foodora <ArrowUpRight size={15} />
        </a>
        <a href="https://wolt.com/sv/swe/goteborg/restaurant/birria-seoul-4" target="_blank" rel="noreferrer">
          Wolt <ArrowUpRight size={15} />
        </a>
        <a href="https://www.ubereats.com/se/store/birria-seoul/d1qFadwkV9mGMCkY7TLNLg" target="_blank" rel="noreferrer">
          Uber Eats <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="footer-column">
        <p>Besök oss</p>
        <a href="https://maps.google.com/?q=Stampgatan+48+Göteborg" target="_blank" rel="noreferrer">
          <MapPin size={16} /> Stampgatan 48<br />411 01 Göteborg
        </a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Birria Seoul</span>
        <a
          className="footer-credit"
          href="https://mediamagnet-three.vercel.app"
          target="_blank"
          rel="noreferrer"
          aria-label="Byggd av MediaMagnet"
        >
          <span>Byggd av</span>
          <img src="/images/mediamagnet_logo_with_text_vit.png" alt="MediaMagnet" />
        </a>
        <span>Priser och tillgänglighet kan ändras.</span>
      </div>
    </footer>
  );
}
