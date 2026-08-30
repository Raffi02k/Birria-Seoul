import React from "react";
import PageMeta from "./components/PageMeta";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import { RouterContext } from "./router";

type Route = {
  title: string;
  description: string;
  element: React.ReactNode;
};

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function getPathname() {
  return normalizePath(window.location.pathname);
}

function getRoute(pathname: string): Route {
  switch (pathname) {
    case "/":
      return {
        title: "Birria Seoul New Gen",
        description:
          "Koreansk × mexikansk street food på Stampgatan 48 i Göteborg. Birria tacos, consommé och Seoul heat.",
        element: <HomePage />,
      };
    case "/meny":
      return {
        title: "Meny | Birria Seoul",
        description:
          "Se Birria Seouls meny med birria tacos, consommé, drinks och Seoul heat i Göteborg.",
        element: <MenuPage />,
      };
    case "/om-oss":
      return {
        title: "Om oss | Birria Seoul",
        description:
          "Lär känna Birria Seoul: koreansk-mexikansk streetfood i Göteborg med birria, kimchi och storstadspuls.",
        element: <AboutPage />,
      };
    case "/galleri":
      return {
        title: "Galleri | Birria Seoul",
        description: "Se maten, grillen och känslan hos Birria Seoul i Göteborg.",
        element: <GalleryPage />,
      };
    case "/kontakt":
      return {
        title: "Kontakt | Birria Seoul",
        description:
          "Hitta Birria Seoul på Stampgatan 48 i Göteborg. Se öppettider, leverans och beställningslänkar.",
        element: <ContactPage />,
      };
    default:
      return {
        title: "Sidan hittades inte | Birria Seoul",
        description: "Sidan du letar efter finns inte.",
        element: <NotFoundPage />,
      };
  }
}

export default function App() {
  const [pathname, setPathname] = React.useState(getPathname);

  React.useEffect(() => {
    const handlePopState = () => setPathname(getPathname());

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to: string, options?: { replace?: boolean }) => {
    const url = new URL(to, window.location.origin);
    const nextPathname = normalizePath(url.pathname);
    const nextUrl = `${nextPathname}${url.search}${url.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (currentUrl === nextUrl) {
      if (url.hash) {
        const element = document.getElementById(url.hash.slice(1));
        element?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return;
    }

    if (options?.replace) {
      window.history.replaceState(null, "", nextUrl);
    } else {
      window.history.pushState(null, "", nextUrl);
    }

    setPathname(nextPathname);

    if (url.hash) {
      requestAnimationFrame(() => {
        const element = document.getElementById(url.hash.slice(1));
        element?.scrollIntoView();
      });
    }
  };

  const route = getRoute(pathname);

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      <PageMeta description={route.description} title={route.title} />
      <ScrollToTop pathname={pathname} />
      <div key={pathname} className="page-transition">
        {route.element}
      </div>
    </RouterContext.Provider>
  );
}
