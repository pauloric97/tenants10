import en from './en.json';
import de from './de.json';
import fr from './fr.json';
import es from './es.json';
import it from './it.json';

export type Lang = 'en' | 'de' | 'fr' | 'es' | 'it';

const translations = { en, de, fr, es, it } as const;

export function getTranslations(lang: Lang) {
  return translations[lang] ?? translations['en'];
}

export type Translations = ReturnType<typeof getTranslations>;
