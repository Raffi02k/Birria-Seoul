import { ArrowUpRight, Flame } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { drinks, menuItems } from "../content/siteContent";

export default function MenuPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero menu-hero">
        <div>
          <p className="section-kicker">THE LINEUP</p>
          <h1>
            Birria tacos.<br />
            <span>Choose your crunch.</span>
          </h1>
          <p>Alla birria tacos serveras med rykande consommé. Här börjar ritualen med första dippen.</p>
        </div>
        <div className="page-hero-art">
          <img className="fill-image" src="/images/menu-birria.png" alt="Birria Seoul tacos med consommé" />
          <div className="round-stamp">
            <img src="/images/small_logo.PNG" alt="Birria Seoul logo" />
          </div>
        </div>
      </section>
      <section className="menu-list section-pad">
        {menuItems.map((item, index) => (
          <article className="menu-row" key={item.name}>
            <div className="menu-row-index">0{index + 1}</div>
            <div className="menu-row-image">
              <img className="fill-image" src={item.image} alt={item.name} />
            </div>
            <div className="menu-row-copy">
              <p className="heat-tag">{item.heat}</p>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <strong>{item.price}</strong>
          </article>
        ))}
      </section>
      <section className="drinks section-pad">
        <div className="drinks-copy">
          <p className="section-kicker">COOL DOWN</p>
          <h2>Halal beef. Seoul heat.</h2>
          <p>Kalla favoriter som balanserar hetta, crunch och varje sista droppe consommé.</p>
          <img className="drinks-gif" src="/images/Drinkup.gif" alt="Drink up" />
        </div>
        <div className="drink-list">
          {drinks.map((drink) => (
            <article className="drink-card" key={drink.name}>
              <div className="drink-card-image">
                <img src={drink.image} alt={drink.name} />
              </div>
              <div className="drink-card-copy">
                <div>
                  <span>{drink.name}</span>
                  <p>{drink.note}</p>
                </div>
                <strong>{drink.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="menu-notes section-pad">
        <div className="menu-notes-card">
          <p className="section-kicker">BRA ATT VETA</p>
          <h2>Sticky fingers är en del av planen.</h2>
          <p className="menu-notes-lead">
            Birria Seoul smakar som bäst när du går all in: varm consommé, krispiga tacos och noll rädsla för spill.
          </p>
          <div className="menu-notes-grid">
            <article>
              <h3>Consommé ingår</h3>
              <p>Alla birria tacos serveras med den mustiga buljongen från långkoket. Doppa varje tugga och känn hur allt vaknar till liv.</p>
            </article>
            <article>
              <h3>Plasthandskar finns</h3>
              <p>När dippen börjar på riktigt får det gärna bli lite stökigt. Handskar finns redo för ett härligt, kladdigt moment.</p>
            </article>
            <article>
              <h3>Doppa, ät, njut</h3>
              <p>Den bästa versionen av Birria Seoul är varm, högljudd, generös och värd en extra servett. Upprepa tills cravingsen lugnar sig.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="menu-order">
        <p>Ready to dip?</p>
        <a
          className="button button-hot"
          href="https://www.foodora.se/restaurant/ui2b/birria-seoul"
          target="_blank"
          rel="noreferrer"
        >
          Beställ nu <ArrowUpRight size={18} />
        </a>
        <small>Priserna är hämtade från Foodora i augusti 2026. App-priser och utbud kan ändras.</small>
      </section>
      <SiteFooter />
    </main>
  );
}
