import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

/** Read the locale out of a URL. English => 'en', /he/... => 'he'. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

/** Returns a t() function that looks up a key for the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as any)[key] ?? ui[defaultLang][key];
  };
}

/** Build a locale-aware path. localePath('en','/blog') => '/blog', ('he','/blog') => '/he/blog'. */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}
