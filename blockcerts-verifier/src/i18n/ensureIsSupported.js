import { defaultLocale } from './detectLocale';
import * as i18n from './index';

export function setLocaleValidCase (locale) {
  const localeParts = locale.split('-');
  return localeParts.length > 1
    ? `${localeParts[0].toLowerCase()}-${localeParts[1].toUpperCase()}`
    : localeParts[0].toLowerCase();
}

export default function ensureIsSupported (locale) {
  let isSupported;

  const supportedLanguages = i18n.getSupportedLanguages().map(language => language.toLowerCase());

  // Test RFC 3066 language
  isSupported = supportedLanguages.indexOf(locale.toLowerCase()) > -1;

  // Test RFC 3066 language-country
  if (!isSupported) {
    const isoLocale = locale.substr(0, 2).toLowerCase();
    const indexIsoLocale = supportedLanguages.map(language => language.split('-')[0]).indexOf(isoLocale);
    isSupported = indexIsoLocale > -1;

    if (isSupported) {
      locale = supportedLanguages[indexIsoLocale];
    }
  }

  if (!isSupported) {
    locale = defaultLocale;
  }

  // Get default locale otherwise
  return setLocaleValidCase(locale);
}
