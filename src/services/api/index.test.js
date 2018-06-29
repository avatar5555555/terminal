import api from '.'

import fakeData from 'src/fakeData'

describe('api', () => {
  it('returns fakeData', async () => {
    const data = await api.getOperatorsList()

    expect(data).toBe(fakeData)
  })

  it('postPayment rejects', async () => {
    const mockMath = Object.create(global.Math)
    mockMath.random = () => 0.1
    global.Math = mockMath

    await expect(api.postPayment()).rejects.toEqual(
      'There is some troubles on server side'
    )
  })

  it('postPayment resolves', async () => {
    const mockMath = Object.create(global.Math)
    mockMath.random = () => 0.5
    global.Math = mockMath

    await expect(api.postPayment()).resolves
  })
})
