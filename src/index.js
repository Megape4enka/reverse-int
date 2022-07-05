module.exports = function reverse (n) {
  if (n < 0) {
      let positiveNumber = n * -1
      let str = positiveNumber + ''
      let arr = Math.abs(str.split('').reverse().join(''))
      return arr
  } else {
      let str = n + ''
      let arr = Math.abs(str.split('').reverse().join(''))
      return arr
  }
}
