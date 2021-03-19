const num = document.getElementById('num')
const check = document.getElementById('check')

check.addEventListener('click', function () {
  const numValue = +num.value

  //if..else的寫法
  if (numValue > 100) {
    alert('num > 100')
  } else {
    alert('num< 100')
  }

  //三元運算子的寫法(為if..else的簡寫法)
  //限於一行可完成時使用(無法使用console.log)
  numValue > 100 ? alert('num >100') : alert('num < 100')
})

/////////////////////////////////////////////////////////////
//下列兩種寫法相同(三元運算子&if..else)
check.addEventListener('click', function () {
  const numValue = +num.value
  //寫法一
  let result = ''

  if (numValue > 100) {
    result = 'num > 100'
  } else {
    result = 'num < 100'
  }

  //上面也可以不用花括號，寫成:
  // if (numValue > 100) result = 'num > 100'
  // else result = 'num < 100'

  //寫法二(let改為const也可以因為沒有要改變)
  // let result = numValue > 100 ? 'num > 100' : 'num < 100'
})
