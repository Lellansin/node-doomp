var alarm = require('.')

process.on('exit', function () {
  alarm(3)
})
