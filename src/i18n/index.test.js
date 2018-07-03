import en from './en'

import { t } from '.'

describe('i18n', () => {
  it('t return translated text', () => {
    const translation = t('Title')

    expect(translation).toBe(en.Title)
  })
})
