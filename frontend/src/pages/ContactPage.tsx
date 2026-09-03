import { ArrowUpRight, MapPin, Phone, ShieldCheck, ShoppingBag } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { contactFacts, openingHours } from "../content/siteContent";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="story-hero contact-story-hero">
        <img className="story-hero-image" src="/images/griddle-birria.png" alt="Birria Seoul på grillen" />
        <div className="story-hero-veil" />
        <div className="story-hero-content section-pad">
          <div className="story-hero-copy">
            <p className="section-kicker">STAMPGATAN 48 · ULLEVI NORRA</p>
            <h1>
              Foodora eller drop-in.<br />
              <span>Seoul heat direkt.</span>
            </h1>
            <p>
              Drop-in, take-away eller hemleverans. När cravings slår till ska det vara lätt att beställa birria tacos, consommé och halal beef.
            </p>
            <div className="hero-actions">
              <a className="button button-hot" href="https://maps.google.com/?q=Stampgatan+48+Göteborg" target="_blank" rel="noreferrer">
                Öppna karta <MapPin size={18} />
              </a>
              <a className="button button-ghost" href="https://www.foodora.se/restaurant/ui2b/birria-seoul" target="_blank" rel="noreferrer">
                Beställ nu <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div className="story-hero-tiles contact-tiles">
            <article className="story-tile">
              <small>01</small>
              <h3>Halal</h3>
              <p>Streetfood som fler kan samlas kring.</p>
            </article>
            <article className="story-tile">
              <small>02</small>
              <h3>Leverans</h3>
              <p>Foodora, Wolt och Uber Eats direkt från köket.</p>
            </article>
            <article className="story-tile">
              <small>03</small>
              <h3>Drop-in</h3>
              <p>Mitt i stan, nära event, lätt att svänga förbi.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-layout contact-layout-compact section-pad">
        <div className="contact-primary">
          <div className="contact-card">
            <p className="section-kicker">ADRESS</p>
            <h2>Birria Seoul, Göteborg</h2>
            <p className="contact-address">
              <MapPin size={20} /> Stampgatan 48<br />411 01 Göteborg
            </p>
            <div className="contact-action-stack">
              <a className="button button-hot" href="https://maps.google.com/?q=Stampgatan+48+Göteborg" target="_blank" rel="noreferrer">
                Öppna karta <ArrowUpRight size={18} />
              </a>
              <a className="contact-phone" href="tel:0729615098">
                <Phone size={18} /> 072-961 50 98
              </a>
            </div>
          </div>

          <div className="contact-card">
            <p className="section-kicker">ÖPPETTIDER</p>
            <div className="hours-list">
              {openingHours.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-card highlight-card compact-highlight-card">
            <p className="section-kicker">BRA ATT VETA</p>
            <div className="fact-grid">
              {contactFacts.map((fact) => (
                <div className="fact-pill" key={fact}>
                  <ShieldCheck size={16} /> {fact}
                </div>
              ))}
            </div>
            <p>
              Här får du streetfood på dina villkor: kom in spontant, ta med dig maten eller beställ hem direkt via apparna.
            </p>
          </div>
        </div>

        <div className="contact-secondary">
          <div className="contact-card delivery-card">
            <p className="section-kicker">BESTÄLL</p>
            <h3>Foodora, Wolt eller pick-up?</h3>
            <p>Välj din favoritapp och låt dippen börja med birria tacos och consommé.</p>
            <div className="delivery-links">
              <a href="https://www.foodora.se/restaurant/ui2b/birria-seoul" target="_blank" rel="noreferrer">
                <ShoppingBag size={18} /> Foodora <ArrowUpRight size={16} />
              </a>
              <a href="https://wolt.com/sv/swe/goteborg/restaurant/birria-seoul-4" target="_blank" rel="noreferrer">
                <ShoppingBag size={18} /> Wolt <ArrowUpRight size={16} />
              </a>
              <a href="https://www.ubereats.com/se/store/birria-seoul/d1qFadwkV9mGMCkY7TLNLg" target="_blank" rel="noreferrer">
                <ShoppingBag size={18} /> Uber Eats <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="contact-card map-card compact-map-card">
            <p className="section-kicker">HITTA HIT</p>
            <div className="map-frame map-frame-compact">
              <iframe
                title="Karta till Birria Seoul"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Stampgatan%2048%20G%C3%B6teborg&t=k&z=16&output=embed"
              />
            </div>
            <p className="map-note">
              Precis vid Ullevi Norra, lätt att hitta när cravings slår till.
            </p>
            <a className="map-link" href="https://maps.google.com/?q=Stampgatan+48+Göteborg" target="_blank" rel="noreferrer">
              Öppna i Google Maps <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
