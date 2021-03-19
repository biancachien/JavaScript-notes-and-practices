const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  // 隨機產生一個1-6的整數
  const p = Math.floor(Math.random() * 6) + 1

  // 對照要呈現的圖示的fontawesome標記
  // <i class="fas fa-dice-one"></i>
  let diceTag = ''
  switch (p) {
    case 1:
      diceTag = '<i class="fas fa-dice-one"></i>'
      break
    case 2:
      diceTag = '<i class="fas fa-dice-two"></i>'
      break
    case 3:
      diceTag = '<i class="fas fa-dice-three"></i>'
      break
    case 4:
      diceTag = '<i class="fas fa-dice-four"></i>'
      break
    case 5:
      diceTag = '<i class="fas fa-dice-five"></i>'
      break
    case 6:
      diceTag = '<i class="fas fa-dice-six"></i>'
      break
    default:
      diceTag = ''
  }

  // 呈現 圖示
  dice.innerHTML = diceTag

  // 呈現 點數
  point.innerHTML = p + '點'
})
