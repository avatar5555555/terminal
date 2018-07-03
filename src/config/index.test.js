import { getLocale } from '.'

it('checks locale if navigator.language === ru', () => {
  expect(getLocale({ language: 'ru' })).toBe('ru')
})

it('checks locale if navigator.language !== ru', () => {
  expect(getLocale({ language: 'foo' })).toBe('en')
})
