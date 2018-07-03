const config = {
  isDev: process.env.NODE_ENV !== 'production',
  isBrowser: typeof window !== 'undefined',
  locale: navigator.language === 'ru' ? 'ru' : 'en',
  basename: process.env.PUBLIC_URL
}

export default config
