var DOOMP = String.fromCharCode(7)

function alarm (count) {
  do {
    process.stdout.write(DOOMP)
  } while (--count)
}

module.exports = alarm
