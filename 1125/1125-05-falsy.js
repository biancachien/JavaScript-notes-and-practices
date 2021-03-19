//falsy

const num = document.getElementById('num')
const check = document.getElementById('check')

//寫法一
check.addEventListener('click', function () {
  if (num.value.length === 0) {
    alert('沒填')
  } else {
    alert(num.value)
  }
})

//寫法二
check.addEventListener('click', function () {
  // !反向運算(真的變假，假的變真)，空字串的概念
  // 如果number沒有值
  if (!num.value) {
    alert('沒填')
  } else {
    alert(num.value)
  }
})
