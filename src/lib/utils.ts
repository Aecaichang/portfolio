// ponytail: plain join instead of clsx+tailwind-merge — icons only pass static classes
export const cn = (...classes: Array<string | undefined | null | false>): string =>
  classes.filter(Boolean).join(' ');
