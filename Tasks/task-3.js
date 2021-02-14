function flattenAndSort(array) {
    var num = []
    if (array.length < 1) {
      return array
    }else {
      for (let a = 0; a < array.length; a++) {
        for (let b = 0; b < array[a].length; b++) {
          num.push(array[a][b])
        }
      }
    return num.sort((a,b) => a-b)
    }
}  