'use strict'
const co = require('co')
const random = require('./lib/random')
const lu = require('./lib/lu')

module.exports = co.wrap(function* (cli) {
  const timeout = cli.flags.timeout
  if (timeout) {
    yield lu(timeout)
  } else {
    const image = yield random()
    console.log(image)
  }
})
