import * as toastify from 'react-toastify'

import { makeHandler } from './index'

jest.mock('src/i18n', () => ({ t: jest.fn(x => x) }))

describe('Toast service', () => {
  const successSpy = jest.fn()

  toastify.toast = {
    success: successSpy,
    position: toastify.toast.POSITION.BOTTOM_RIGHT
  }

  toastify.style = jest.fn()

  describe('makeHandler', () => {
    it('returns handler', () => {
      const handler = makeHandler('success')
      expect(handler).toBeInstanceOf(Function)
      handler('hello')
      expect(successSpy).toBeCalledWith('hello', { className: 'toast-success' })
    })
  })
})
