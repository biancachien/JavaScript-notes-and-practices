// 使用者點的按鈕
const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')

// 呈現的文字
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const result = document.getElementById('result')

// 數字代表的拳的文字
const textArray = ['剪刀', '石頭', '布']
// 記錄使用者出的拳(以數字代表)
let userNumber = 0
// 記錄電腦出的拳(以數字代表)
let computerNumber = 0

function checkResult() {
  // 呈現文字(用索引值查陣列對照)
  user.innerHTML = '你出了 ' + textArray[userNumber - 1]
  computer.innerHTML = '電腦出了 ' + textArray[computerNumber - 1]

  // 判斷勝負與呈現勝負資訊(以使用者為基礎)
  // 相同值時是平手
  if (userNumber === computerNumber) {
    result.innerHTML = '平手'
  }

  // 以使用者為基礎相減值(user - computer)
  const subNumber = userNumber - computerNumber

  // 贏的情況
  if (subNumber === 1 || subNumber === -2) {
    result.innerHTML = '你贏了！'
  }

  // 輸的情況
  if (subNumber === -1 || subNumber === 2) {
    result.innerHTML = '輸了....'
  }
}

// 剪刀=1, 石頭=2, 布=3
//使用者按了剪刀按鈕
scissors.addEventListener('click', function () {
  // 電腦出的拳，1~3的隨機數字
  computerNumber = Math.floor(Math.random() * 3) + 1

  // 使用者出的拳(剪刀)(以數字代表)
  userNumber = 1

  checkResult()
})

//使用者按了石頭按鈕
rock.addEventListener('click', function () {
  // 電腦出的拳，1~3的隨機數字
  computerNumber = Math.floor(Math.random() * 3) + 1

  // 設定使用者出的拳(石頭)(以數字代表)
  userNumber = 2

  checkResult()
})

//使用者按了布的按鈕
paper.addEventListener('click', function () {
  // 電腦出的拳，1~3的隨機數字
  computerNumber = Math.floor(Math.random() * 3) + 1

  // 設定使用者出的拳(布)(以數字代表)
  userNumber = 3

  checkResult()
})
