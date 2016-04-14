'use strict'
const co = require('co')
const jandan = require('node-jandan')
const imgcat = require('imgcat')
const Spin = require('io-spin')

module.exports = co.wrap(function* () {
  const spin = new Spin('Box1', 'Fetching')
  spin.start()
  const image = yield jandan.random()
  const result = yield imgcat(image, {height: '80%'}, {
    afterDownload() {
      spin.stop()
    }
  })
  return result
})
