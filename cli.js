#!/usr/bin/env node
const meow = require('meow')
const update = require('update-notifier')
const main = require('./')

const cli = meow(`
  Usage:
    ooxx:           Display random ooxx

    -t/--timeout:   Display ooxx every x seconds, 1s by default
    -v/--version:   Print version
    -h/--help:      Print help
`.trim(), {
  alias: {
    t: 'timeout',
    v: 'version',
    h: 'help'
  }
})

update({pkg: cli.pkg}).notify()

main(cli).catch(e => console.log(e.stack))
