const message = document.getElementById('message')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  // 隨機產生一個1-100的整數
  const rand = Math.floor(Math.random() * 100) + 1

  // 1-3
  if (rand < 4) {
    message.innerHTML = '五星卡'
  }

  // 4-20
  if (rand > 3 && rand < 21) {
    message.innerHTML = '四星卡'
  }

  // 21-100
  if (rand > 20) {
    message.innerHTML = '三星卡'
  }
})
