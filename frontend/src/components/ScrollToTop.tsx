import { useEffect } from "react";

type ScrollToTopProps = {
  pathname: string;
};

export default function ScrollToTop({ pathname }: ScrollToTopProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}
