import en from "./en";
import es from "./es";
import fr from "./fr";
import ru from "./ru";

export const LOCALES = ["es", "en", "ru", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

const dictionaries = { es, en, ru, fr };

export function useTranslations(lang: Locale) {
  return dictionaries[lang];
}

/** Narrow Astro.currentLocale (a string | undefined) to a real Locale. */
export function getLocale(lang: string | undefined): Locale {
  return (LOCALES as readonly string[]).includes(lang ?? "")
    ? (lang as Locale)
    : DEFAULT_LOCALE;
}

/** Drop the leading /es|/en|/ru|/fr segment so we can rebuild the same page in another language. */
export function stripLocale(pathname: string): string {
  const segs = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  if ((LOCALES as readonly string[]).includes(segs[0])) segs.shift();
  return segs.join("/");
}
