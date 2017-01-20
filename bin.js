#!/usr/bin/env node

const runDefault = require('./')

const argv = process.argv
const command = argv[2]
const options = { stdio: 'inherit' }

if (command === undefined) {
  console.error('run-default: missing command.')
  console.log(usage())
  process.exit(1)
}

for (var i = 3; i < argv.length; i++) {
  const arg = argv[i]
  if (arg === '--') {
    var defaultArgs = argv.slice(3, i)
    var args = argv.slice(i + 1)
    break
  }
}

if (args === undefined) {
  console.error('run-default: missing `--` to separate defaultArgs and args.')
  console.log(usage())
  process.exit(1)
}

runDefault(command, defaultArgs, args, options)

function usage () {
  return 'usage: run-default command ...defaultArgs -- ...args'
}
