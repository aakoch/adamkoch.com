function debug() {
  console.log(...arguments)
}
function info() {
  console.log(...arguments)
}
function error() {
  console.error(...arguments)
}

export {
  debug, info, error
}