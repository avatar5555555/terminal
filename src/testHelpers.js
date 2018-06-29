// created consider react-intl wiki https://github.com/yahoo/react-intl/wiki/Testing-with-React-Intl
import React from 'react'
import { IntlProvider, intlShape } from 'react-intl'
import { mount, shallow } from 'enzyme'

import messages from 'src/i18n'
import config from 'src/config'

const { locale } = config
// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider(
  { locale, messages: messages[locale] },
  {}
)
const { intl } = intlProvider.getChildContext()

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
const nodeWithIntlProp = node => React.cloneElement(node, { intl })

export const shallowWithIntl = (node, { context, ...additionalOptions } = {}) =>
  shallow(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl }),
    ...additionalOptions
  })

export const mountWithIntl = (
  node,
  { context, childContextTypes, ...additionalOptions } = {}
) =>
  mount(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl }),
    childContextTypes: Object.assign(
      {},
      { intl: intlShape },
      childContextTypes
    ),
    ...additionalOptions
  })
