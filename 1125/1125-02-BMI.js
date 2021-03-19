// 先統一得到目前的網頁上的要使用的DOM元素物件-BMI計算
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const calc = document.getElementById('calc')
const bmiText = document.getElementById('bmiText')

//寫法一
calc.addEventListener('click', function () {
  // 先得到身高與體重的數字值
  const w = +weight.value
  const h = +height.value

  // 計算 BMI = 體重(公斤) / 身高2(公尺平方)
  const bmi = w / Math.pow(h / 100, 2)
  // 輸出時只保留一位小數點
  bmiText.innerHTML = bmi.toFixed(1)
})

//寫法二
// calc.addEventListener('click', function () {
//   bmiText.innerHTML =
//     +weight.value / Math.pow(+height.value / 100, 2).toFixed(1)
// })
