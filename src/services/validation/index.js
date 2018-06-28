// See https://github.com/catamphetamine/libphonenumber-js#customizing-metadata
import custom from 'libphonenumber-js/custom'

const metadata = require('./metadata.min.json')

const parse = function parse() {
  const parameters = Array.prototype.slice.call(arguments)
  parameters.push(metadata)
  return custom.parse.apply(this, parameters)
}

const format = function format() {
  const parameters = Array.prototype.slice.call(arguments)
  parameters.push(metadata)
  return custom.format.apply(this, parameters)
}

export const parsePhone = input => {
  const parsed = parse(input, 'RU')
  return parsed && parsed.phone ? format(parsed, 'E.164') : null
}

export const isPhone = value => !!parsePhone(value)
