//for迴圈
for (let count = 0; count < 5; count++) {
  console.log(count)
}

//while迴圈(同for迴圈)
let count2 = 0
while (count2 < 5) {
  console.log(count2)
  count2++
}

//break和continue可搭配迴圈使用
//break只會執行0→1→2→3就跳出
for (let count3 = 0; count3 < 5; count3++) {
  if (count3 === 3) break
  console.log(count3)
}

//continue只會執行0→1→2→4跳出
for (let count4 = 0; count4 < 5; count4++) {
  if (count4 === 3) continue
  console.log(count4)
}

//continue可用來處理跳數(基數、偶數)
for (let count5 = 1; count5 < 11; count5++) {
  if (count5 % 2) continue
  console.log(count5)
}
