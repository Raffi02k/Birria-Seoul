import { createContext, useContext } from "react";

export type NavigateOptions = {
  replace?: boolean;
};

export type RouterContextValue = {
  pathname: string;
  navigate: (to: string, options?: NavigateOptions) => void;
};

export const RouterContext = createContext<RouterContextValue | null>(null);

export function useRouter() {
  const value = useContext(RouterContext);

  if (!value) {
    throw new Error("useRouter must be used within RouterContext.");
  }

  return value;
}
