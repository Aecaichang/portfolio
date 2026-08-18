import en from '../locales/en.json';
import th from '../locales/th.json';

export type Locale = 'th' | 'en';
export type Content = typeof en;

const contents: Record<Locale, Content> = { en, th };

export function getContent(locale: Locale): Content {
  return contents[locale];
}

/** Path prefix for a locale ('' for default th, '/en' for English). */
export function localePath(locale: Locale): string {
  return locale === 'th' ? '' : '/en';
}

/** The other locale's equivalent of the current path, for the language switcher. */
export function alternatePath(locale: Locale, pathname: string): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return locale === 'th' ? `/en${bare === '/' ? '' : bare}` || '/en' : bare;
}
