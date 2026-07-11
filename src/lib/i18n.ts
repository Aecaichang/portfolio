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

export function calculateAge(birthDateString: string, locale: Locale): string {
  const birthDate = new Date(birthDateString);
  if (Number.isNaN(birthDate.getTime())) return '';
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days = prevMonthDays - Math.min(birthDate.getDate(), prevMonthDays) + today.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return locale === 'th'
    ? `${years} ปี ${months} เดือน ${days} วัน`
    : `${years} Years ${months} Months ${days} Days`;
}
