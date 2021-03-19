//switch
//有多條路可以選擇
//case後一定要放break否則會有bug

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')

let choice = 0

num1.addEventListener('click', function () {
  choice = 1

  switch (choice) {
    case 1:
      alert('hello')
      break
    case 2:
      alert('hi')
      break
    case 3:
      alert('bye')
      break
    default:
      alert('welcome')
  }
})
