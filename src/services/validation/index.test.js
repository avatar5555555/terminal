import { isPhone } from '.'

describe('isPhone', () => {
  it('with valid phone', () => {
    expect(isPhone('+7(911) 111-11-11')).toBe(true)
  })

  it('with invalid phone', () => {
    expect(isPhone('invalid')).toBe(false)
  })
})
