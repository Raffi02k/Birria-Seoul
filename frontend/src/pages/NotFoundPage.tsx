import AppLink from "../components/AppLink";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <meta name="robots" content="noindex" />
      <div className="not-found-card">
        <p className="section-kicker">404 · Sidan hittades inte</p>
        <h1>Den sidan finns inte.</h1>
        <p>Det verkar bara vara den här sidan som saknas, inte hela webbplatsen.</p>
        <p>Gå tillbaka till startsidan, öppna menyn eller kontakta restaurangen om länken verkar fel.</p>
        <div className="not-found-actions">
          <AppLink className="button button-hot" href="/">
            Till startsidan
          </AppLink>
          <AppLink className="button button-ghost" href="/meny">
            Se menyn
          </AppLink>
          <AppLink className="button button-ghost" href="/kontakt">
            Hitta hit
          </AppLink>
        </div>
      </div>
    </main>
  );
}
