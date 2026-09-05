import { ArrowDownRight, ArrowUpRight, Camera, Flame, MapPin } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import AppLink from "../components/AppLink";
import { menuItems, reviews } from "../content/siteContent";

const featuredMenuItems = menuItems.filter((item) => item.name !== "Gangnam Birria");

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <img
          className="hero-image fill-image"
          src="/images/hero-birria.png"
          alt="Krispiga birria-tacos som doppas i consommé"
        />
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-copy">
          <p className="eyebrow">
            <Flame size={16} /> 15H slow cooked · Göteborg
          </p>
          <h1>
            <span>Birria</span> tacos.<br />
            <span>Seoul heat</span>
            <br />
            Repeat.
          </h1>
          <p className="hero-lead">
            Seoul heat möter mexikansk soul. Krispiga birria tacos, långkokt halal beef och
            consommé som går rakt mot sticky fingers.
          </p>
          <div className="hero-actions">
            <a
              className="button button-hot"
              href="https://www.foodora.se/restaurant/ui2b/birria-seoul"
              target="_blank"
              rel="noreferrer"
            >
              Beställ nu <ArrowUpRight size={18} />
            </a>
            <AppLink className="button button-ghost" href="/meny">
              Utforska menyn <ArrowDownRight size={18} />
            </AppLink>
          </div>
        </div>
        <div className="hero-sticker" aria-hidden="true">
          <img src="/images/small_logo.PNG" alt="Birria Seoul logo" className="hero-sticker-img" />
        </div>
        <p className="scroll-cue">
          Scrolla för cravings <ArrowDownRight size={16} />
        </p>
      </section>
      <div className="ticker" aria-label="Birria Seoul signaturer">
        <div className="ticker-track">
          {[0, 1, 2, 3].map((copy) => (
            <span key={copy}>BIRRIA TACOS ✦ CONSOMMÉ ✦ SEOUL HEAT ✦ HALAL BEEF ✦ STICKY FINGERS ✦ </span>
          ))}
        </div>
      </div>
      <section className="intro section-pad">
        <p className="section-kicker">01 / THE OBSESSION</p>
        <div className="intro-grid">
          <h2>
            Inte bara birria tacos<br />
            <em>En hel ritual</em>
          </h2>
          <div className="intro-copy">
            <p>
              15 timmar långkok. Majstortilla på stekbordet. Smält ost, friska örter,
              syra och hetta. Sedan kommer dippen.
            </p>
            <AppLink className="text-link" href="/meny">
              Se hela menyn <ArrowUpRight size={18} />
            </AppLink>
          </div>
        </div>
      </section>
      <section className="featured section-pad">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 / THE MAIN CHARACTERS</p>
            <h2>
              Pick your<br />
              <span>birria tacos</span>
            </h2>
          </div>
          <p>Tre personligheter. Samma långkokta hjärta.</p>
        </div>
        <div className="menu-preview">
          {featuredMenuItems.map((item, index) => (
            <article className="dish-card" key={item.name}>
              <div className="dish-number">0{index + 1}</div>
              <div className="dish-image-wrap">
                <img className="fill-image" src={item.image} alt={item.name} />
              </div>
              <div className="dish-meta">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.short}</p>
                </div>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className="center-action">
          <AppLink className="button button-light" href="/meny">
            Hela menyn <ArrowUpRight size={18} />
          </AppLink>
        </div>
      </section>
      <section className="experience-split">
        <div className="experience-image">
          <img
            className="fill-image"
            src="/images/griddle-birria.png"
            alt="Birria-tacos som blir krispiga på stekbordet"
          />
          <div className="heat-badge">
            <Flame size={20} /> Fresh off the grill
          </div>
        </div>
        <div className="experience-copy">
          <p className="section-kicker">03 / SEOUL AFTER DARK</p>
          <h2>
            Sticky fingers.<br />Cold city.
          </h2>
          <p>
            Mitt emot Ullevi på Stampgatan. Kom hungrig, lämna med consommé på
            fingrarna och en ny favorit.
          </p>
          <a
            className="text-link light-link"
            href="https://maps.google.com/?q=Stampgatan+48+Göteborg"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={18} /> Hitta till Stampgatan 48
          </a>
        </div>
      </section>
      <section className="social-proof section-pad">
        <div className="reviews-panel">
          <div className="rating-lockup">
            <span>4.3</span>
            <div>
              <div className="stars" aria-label="4,3 av 5 stjärnor">
                ★★★★★
              </div>
              <p>29 Foodora-omdömen</p>
            </div>
          </div>
          <div className="review-marquee">
            <div className="review-track">
              {[...reviews, ...reviews].map((review, index) => (
                <article className="review-card" key={`${review.name}-${index}`}>
                  <div className="stars">★★★★★</div>
                  <blockquote>“{review.quote}”</blockquote>
                  <p>{review.name} · Foodora</p>
                </article>
              ))}
            </div>
          </div>
          <a
            className="text-link"
            href="https://www.foodora.se/restaurant/ui2b/birria-seoul/reviews"
            target="_blank"
            rel="noreferrer"
          >
            Läs fler omdömen <ArrowUpRight size={18} />
          </a>
        </div>
        <a
          className="instagram-panel"
          href="https://www.instagram.com/birriaseoul/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="fill-image" src="/images/menu-birria.png" alt="Senaste maten från Birria Seoul" />
          <div className="instagram-overlay" />
          <div className="instagram-top">
            <Camera size={22} /> @birriaseoul <ArrowUpRight size={20} />
          </div>
          <div className="instagram-bottom">
            <p>Senaste från köket</p>
            <h3>Follow the drip.</h3>
          </div>
        </a>
      </section>
      <section className="final-cta">
        <p>Hungry yet?</p>
        <h2>
          Make it<br />
          <span>messy</span>
        </h2>
        <div className="hero-actions">
          <a
            className="button button-hot"
            href="https://www.foodora.se/restaurant/ui2b/birria-seoul"
            target="_blank"
            rel="noreferrer"
          >
            Beställ via Foodora <ArrowUpRight size={18} />
          </a>
          <AppLink className="button button-ghost" href="/galleri">
            Se galleriet
          </AppLink>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
