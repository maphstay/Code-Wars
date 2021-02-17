function meeting(s) {
    let arr = s.split(';')
    let arr2 = arr.map((a,b) => a.split(':').reverse().join(', ').toUpperCase()).sort()
    return "("+arr2.join(')(')+")"
}