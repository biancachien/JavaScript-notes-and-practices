const message = document.getElementById('message')
const start = document.getElementById('start')
const reset = document.getElementById('reset')

reset.addEventListener('click', function () {
  message.innerHTML = ''
})

start.addEventListener('click', function () {
  for (let i = 0; i < 10; i++) {
    // 隨機產生一個1-100的整數
    const rand = Math.floor(Math.random() * 100) + 1

    // 1-3
    if (rand < 4) {
      message.innerHTML += ' <span style="color:gold">五星<span>'
      console.log(rand)
    }

    // 4-20
    if (rand > 3 && rand < 21) {
      message.innerHTML += ' <span style="color:silver">四星<span>'
    }

    // 21-100
    if (rand > 20) {
      message.innerHTML += ' 三星'
    }
  }
  message.innerHTML += '<br>'
})
