// @flow

import type { Navigator } from 'src/types'

export const getLocale = (nav: Navigator = window.navigator) =>
  nav.language === 'ru' ? 'ru' : 'en'

const config = {
  isDev: process.env.NODE_ENV !== 'production',
  isBrowser: typeof window !== 'undefined',
  locale: getLocale(),
  basename: process.env.PUBLIC_URL
}

export default config
