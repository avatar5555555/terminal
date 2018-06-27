import { addLocaleData } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'

import ru from './ru'

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
  ru: flattenMessages(ru)
}

export default messages
