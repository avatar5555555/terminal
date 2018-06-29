import theme from '.'

describe('theme', () => {
  it('checks primary color', () => {
    const primaryMainColor = '#4caf50'

    expect(theme.palette.primary.main).toBe(primaryMainColor)
  })
})
