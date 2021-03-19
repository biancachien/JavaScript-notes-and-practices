// 宣告-計數器
const total = document.getElementById('total')
const add = document.getElementById('add')
const sub = document.getElementById('sub')

// 設定按鈕加一(用+將html的字串轉成數字)
//innerHtml指顯示在html中間的那個東西
add.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML + 1
})

// 設定按鈕減一
sub.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML - 1
})

//額外補充addEventListener
total.addEventListener('click', function (event) {
  console.log(event.target)
  console.log(this)
  console.log(total)
  //上述三者結果是相同的(都指向total)
})
