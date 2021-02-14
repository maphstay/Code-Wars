var capitals = function (word) {
    var pos = []
    var alf = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ'
    var arr = 0
    for (let i = 0; i < word.length; i++) {
      for (let n = 0; n < alf .length; n++) {
        if (word[i].indexOf(alf[n]) > -1) {
          pos[arr] = i
          arr++
        }
      }
    }
    return pos
}  