import { Language, PageKey } from "./types";

export const ROUTE_MAP: Record<Language, Record<PageKey, string>> = {
  LV: {
    home: "/",
    about: "/par-enzimiem",
    products: "/produkti",
    services: "/pakalpojumi",
    contact: "/kontakti",
  },
  EN: {
    home: "/en",
    about: "/en/about-enzyme-drinks",
    products: "/en/products",
    services: "/en/services",
    contact: "/en/contact",
  },
  RU: {
    home: "/ru",
    about: "/ru/o-fermentirovannyh-napitkah",
    products: "/ru/produkty",
    services: "/ru/uslugi",
    contact: "/ru/kontakty",
  },
};

export function getPageKeyAndLangFromPath(pathname: string): { lang: Language; pageKey: PageKey } {
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  // EN check
  if (cleanPath === "/en") return { lang: "EN", pageKey: "home" };
  if (cleanPath.startsWith("/en/about")) return { lang: "EN", pageKey: "about" };
  if (cleanPath.startsWith("/en/products")) return { lang: "EN", pageKey: "products" };
  if (cleanPath.startsWith("/en/services")) return { lang: "EN", pageKey: "services" };
  if (cleanPath.startsWith("/en/contact")) return { lang: "EN", pageKey: "contact" };

  // RU check
  if (cleanPath === "/ru") return { lang: "RU", pageKey: "home" };
  if (cleanPath.startsWith("/ru/o-fermentirovannyh")) return { lang: "RU", pageKey: "about" };
  if (cleanPath.startsWith("/ru/produkty")) return { lang: "RU", pageKey: "products" };
  if (cleanPath.startsWith("/ru/uslugi")) return { lang: "RU", pageKey: "services" };
  if (cleanPath.startsWith("/ru/kontakty")) return { lang: "RU", pageKey: "contact" };

  // LV default
  if (cleanPath === "/par-enzimiem" || cleanPath === "/par-enzimu-dzerieniem") return { lang: "LV", pageKey: "about" };
  if (cleanPath === "/produkti" || cleanPath === "/veikals") return { lang: "LV", pageKey: "products" };
  if (cleanPath === "/pakalpojumi") return { lang: "LV", pageKey: "services" };
  if (cleanPath === "/kontakti") return { lang: "LV", pageKey: "contact" };

  return { lang: "LV", pageKey: "home" };
}
