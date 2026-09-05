import { ArrowUpRight, MapPin } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import AppLink from "../components/AppLink";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="story-hero about-story-hero">
        <img className="story-hero-image" src="/images/hero-birria.png" alt="Birria tacos med consommé och pink pickles" />
        <div className="story-hero-veil" />
        <div className="story-hero-content section-pad">
          <div className="story-hero-copy">
            <p className="section-kicker">KOREAN x MEXICAN STREETFOOD</p>
            <h1>Birria Seoul <span>Seoul heat</span></h1>
            <p>
              Långkokt birria, smält ost, kimchi, consommé och halal beef. Kort sagt: streetfood byggd för cravings och sticky fingers.
            </p>
            <div className="hero-actions">
              <AppLink className="button button-hot" href="/meny">
                Se menyn <ArrowUpRight size={18} />
              </AppLink>
              <a className="button button-ghost" href="https://maps.google.com/?q=Stampgatan+48+Göteborg" target="_blank" rel="noreferrer">
                Hitta hit <MapPin size={18} />
              </a>
            </div>
          </div>
          <div className="story-hero-tiles">
            <article className="story-tile">
              <small>01</small>
              <h3>Konceptet</h3>
              <p>Mexikanskt långkok möter koreansk syra, hetta och nattlivsenergi.</p>
            </article>
            <article className="story-tile">
              <small>02</small>
              <h3>Halal beef birria</h3>
              <p>Mustig, långkokt och gjord för att doppas i rykande consommé.</p>
            </article>
            <article className="story-tile">
              <small>03</small>
              <h3>Fusionen</h3>
              <p>Kimchi, crunch och umami som lyfter varje tugga över det vanliga.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-panels section-pad">
        <article className="about-panel">
          <p className="section-kicker">VAD ÄR BIRRIA?</p>
          <h3>Långkok med djup, chili och ritual.</h3>
          <p>
            Birria är ursprungligen en traditionell mexikansk köttstuvning där köttet långkokas
            i timmar med chili och kryddor tills det blir så mört att det faller isär. Den mustiga
            buljongen som blir kvar är consommé, och hos Birria Seoul är den inte en sidosak.
          </p>
          <p>
            Den är en del av hela upplevelsen. Doppa, ät, njut, upprepa.
          </p>
        </article>
        <article className="about-panel accent-panel">
          <p className="section-kicker">FUSIONEN</p>
          <h3>Koreansk-mexikansk energi i samma bett.</h3>
          <p>
            Saftigt birria-kött och smält ost möter koreanska smaker som kimchi, chili, slaw och
            den där tydliga hetta-syra-balansen som gör att varje rätt känns levande. Det är just
            spänningen mellan comfort food och street edge som gör konceptet så starkt.
          </p>
        </article>
      </section>

      <section className="city-story section-pad">
        <div className="city-story-image">
          <img src="/images/hero-birria.png" alt="Birria tacos med ost, hetta och pink pickles" />
        </div>
        <div className="city-story-copy">
          <p className="section-kicker">STORSTADSINSPIRATION</p>
          <h2>Född ur streetfood-kultur.</h2>
          <p>
            I städer som Los Angeles och New York har koreansk och mexikansk mat länge mötts i
            food trucks, sena nattkök och små ställen där folk jagar nästa smaksmäll. Birria Seoul
            tar med den energin till Göteborg och översätter den till något eget.
          </p>
          <p>
            Här handlar det om mer än en måltid. Det handlar om tempo, kontraster och den där känslan
            av att hitta något man direkt vill beställa igen.
          </p>
          <div className="hero-actions">
            <AppLink className="button button-light" href="/meny">
              Se menyn <ArrowUpRight size={18} />
            </AppLink>
            <a className="text-link light-link" href="https://maps.google.com/?q=Stampgatan+48+Göteborg" target="_blank" rel="noreferrer">
              <MapPin size={18} /> Hitta till Stampgatan 48
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
