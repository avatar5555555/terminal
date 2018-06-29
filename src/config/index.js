const config = {
  isDev: process.env.NODE_ENV !== 'production',
  isBrowser: typeof window !== 'undefined',
  locale: 'ru',
  basename: process.env.PUBLIC_URL
}

export default config
