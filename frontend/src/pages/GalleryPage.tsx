import { ArrowUpRight, Camera } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { galleryImages } from "../content/siteContent";

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="gallery-heading section-pad">
        <p className="section-kicker">NO FILTER NEEDED</p>
        <h1>
          Eat with<br />
          <span>your eyes.</span>
        </h1>
        <div>
          <p>Crunch, steam, drip - ett galleri byggt för cravings.</p>
          <a className="text-link" href="https://www.instagram.com/birriaseoul/" target="_blank" rel="noreferrer">
            <Camera size={18} /> Följ @birriaseoul <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="gallery-grid section-pad">
        {galleryImages.map((image, index) => (
          <figure className={image.className} key={index}>
            <img className="fill-image" src={image.src} alt={image.alt} />
            <figcaption>0{index + 1} / BIRRIA SEOUL</figcaption>
          </figure>
        ))}
      </section>
      <section className="instagram-cta">
        <Camera size={32} />
        <p>More food. More fire.</p>
        <h2>@birriaseoul</h2>
        <a className="button button-light" href="https://www.instagram.com/birriaseoul/" target="_blank" rel="noreferrer">
          Öppna Instagram <ArrowUpRight size={18} />
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
