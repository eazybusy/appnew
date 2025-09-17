import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from '../locales/en.json';
import ka from '../locales/ka.json';

const i18n = new I18n({
  en,
  ka,
});

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageTag;
}

i18n.enableFallback = true;
i18n.defaultLocale = 'en';

export default i18n;