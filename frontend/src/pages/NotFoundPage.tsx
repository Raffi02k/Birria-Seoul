import AppLink from "../components/AppLink";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="section-kicker">404</p>
        <h1>Sidan finns inte.</h1>
        <p>Den här sidan verkar inte finnas längre.</p>
        <AppLink className="button button-hot" href="/">
          Till startsidan
        </AppLink>
      </div>
    </main>
  );
}
