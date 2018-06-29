const config = {
  isDev: process.env.NODE_ENV !== 'production',
  isBrowser: typeof window !== 'undefined',
  locale: 'ru'
}

export default config
