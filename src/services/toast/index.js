import { toast } from 'react-toastify'

import { t } from 'src/i18n'

export const makeHandler = severity => (content, values = {}, options) =>
  toast[severity](t(content, values), {
    className: `toast-${severity}`,
    position: toast.POSITION.BOTTOM_RIGHT,
    ...options
  })

const proxy = {
  success: makeHandler('success'),
  error: makeHandler('error'),
  warn: makeHandler('warn'),
  info: makeHandler('info')
}

export default proxy
