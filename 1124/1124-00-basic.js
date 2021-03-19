//判斷是否為陣列
//const c = [1, 2]
//無法用console.log(typeof c)
//必須用console.log(Array.isArray (c))

//陣列為地址的概念
const c = [1, 2]
const d = c

console.log('c', c)
console.log('d', d)

// 改變陣列索引值0者為3
c[0] = 3

console.log('c', c)
console.log('d', d)
