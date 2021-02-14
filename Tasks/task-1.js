function getDivisorsCnt(n){
    let div = []
    var arr = 0
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        div[arr] = i
        arr++
      }
    }
    return div.length
}