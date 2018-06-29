import ru from './ru'

import { t } from '.'

describe('i18n', () => {
  it('t return translated text', () => {
    const translation = t('Title')

    expect(translation).toBe(ru.Title)
  })
})
