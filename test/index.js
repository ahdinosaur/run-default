const test = require('tape')

const runDefault = require('../')

test('run-default', function (t) {
  t.ok(runDefault, 'module is require-able')
  t.end()
})
