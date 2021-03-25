//判斷是否為陣列
//const c = [1, 2]
//console.log(typeof c)只會判斷是object
//console.log(Array.isArray (c))才會判斷是不是陣列

//陣列為地址的概念
const c = [1, 2]
const d = c

console.log('c', c)
console.log('d', d)

// 改變陣列索引值0者為3
c[0] = 3

console.log('c', c)
console.log('d', d)
