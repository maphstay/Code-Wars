function capitalize(s){
    let arr1 = [] 
    let arr2 = []
    for (let i = 0; i < s.length; i++) {
      if (i%2==0) {
        arr1.push(s[i].toUpperCase())
      }else {
        arr1.push(s[i])
      }
      if (i%2==1) {
        arr2.push(s[i].toUpperCase())
      }else {
        arr2.push(s[i])
      }
    }
     return [arr1.join(''), arr2.join('')]
}