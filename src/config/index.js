export const getLocale = (nav = window.navigator) =>
  nav.language === 'ru' ? 'ru' : 'en'

const config = {
  isDev: process.env.NODE_ENV !== 'production',
  isBrowser: typeof window !== 'undefined',
  locale: getLocale(),
  basename: process.env.PUBLIC_URL
}

export default config
