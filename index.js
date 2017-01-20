const spawn = require('cross-spawn')

module.exports = runDefault

function runDefault (command, defaultArgs, args, options) {
  if (args.length === 0) args = defaultArgs
  const child = spawn(command, args, options)
  return child
}
