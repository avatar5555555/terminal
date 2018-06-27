import { addLocaleData } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'

import ru from './ru'

addLocaleData([...ruLocaleData])

const messages = {
  ru
}

export default messages
