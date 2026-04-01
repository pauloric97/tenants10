import en from './en.json';
import de from './de.json';
import fr from './fr.json';
import it from './it.json';

export type Lang = 'en' | 'de' | 'fr' | 'it';

const translations = { en, de, fr, it } as const;

export function getTranslations(lang: Lang) {
  return translations[lang] ?? translations['en'];
}

export type Translations = ReturnType<typeof getTranslations>;
