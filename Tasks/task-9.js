var findDigit = function(num, nth){
    if (nth < 1) {
      return num = -1
    }else {
      var a = []
      var b = 0
      a = String(num).split('').reverse().join('')
      b = a.slice(nth-1, nth)
    } 
    if (b < 0) {
      return Math.abs(b)
    }else if ((b == 0)||(b == '')) {
      return 0
    }else if (b == '-') {
      return 0
    }else {
      return Number(b)
    }
}