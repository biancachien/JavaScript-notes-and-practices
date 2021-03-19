// 宣告
const money = document.getElementById('money')
const usd2twd = document.getElementById('usd2twd')
const twd2usd = document.getElementById('twd2usd')
const moneyDisplay = document.getElementById('moneyDisplay')

// 監聽者綁定按鈕(美金轉新台幣)
//輸入框 1 USD 美金 = 28.53 TWD 新台幣
//+money.value轉成數字作運算
usd2twd.addEventListener('click', function () {
  moneyDisplay.innerHTML = +money.value * 28.53
})

// 監聽者綁定按鈕(新台幣轉美金)
twd2usd.addEventListener('click', function () {
  moneyDisplay.innerHTML = (+money.value / 28.53).toFixed(2)
}) //toFixed(2)指在整數後保留小數點後2位數
