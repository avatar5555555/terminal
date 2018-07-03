import { addLocaleData, IntlProvider } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'

import ru from './ru'
import en from './en'

import config from 'src/config'

addLocaleData([...ruLocaleData])

const flattenMessages = (nestedMessages, prefix = '') => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      messages[prefixedKey] = value
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

const messages = {
  ru: flattenMessages(ru),
  en: flattenMessages(en)
}

const { locale } = config

const intlProvider = new IntlProvider(
  { locale, messages: messages[locale] },
  {}
)

export const { intl } = intlProvider.getChildContext()

export const t = (id, values = {}) => intl.formatMessage({ id }, values)

export default messages
