'use strict'
const co = require('co')
const sleep = require('then-sleep')
const random = require('./random')

module.exports = co.wrap(function* (timeout) {
  const get = co.wrap(function* () {
    const image = yield random()
    console.log(image)
    yield sleep(typeof timeout === 'number' ? timeout : 1000)
    yield get()
  })
  yield get()
})
