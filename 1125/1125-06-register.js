const name = document.getElementById('name')
const tel = document.getElementById('tel')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const register = document.getElementById('register')

const message = document.getElementById('message')

// 檢查是否有正確得到dom元素的介面物件
// console.log(name, tel, address, username, password, password2, register)

register.addEventListener('click', function () {
  let error = ''

  // 檢查是否有填寫必要欄位
  //另一種寫法為(name.value.length === 0)
  //!name.value假的值(所以為零)
  //trim()字串頭尾去空白
  //error += ' 姓名沒填'意思為error = error + ' 姓名沒填'(增長機制)，如果沒有+=，後面的error會蓋掉前面的error
  if (!name.value.trim()) error += ' 姓名沒填'
  if (!tel.value.trim()) error += ' 電話沒填'
  if (!address.value.trim()) error += ' 住址沒填'
  if (!username.value.trim()) error += ' 帳號沒填'
  if (!password.value.trim()) error += ' 密碼沒填'
  if (!password2.value.trim()) error += ' 密碼確認沒填'

  // 檢查帳號和密碼長度
  if (username.value.length < 6) error += ' 帳號至少要6位'
  if (password.value.length < 6) error += ' 密碼至少要6位'

  // 檢查兩次密碼輸入正確
  if (password.value !== password2.value) error += ' 兩次輸入的密碼不同'

  //表單驗證通過
  //寫法一(三元運算子)
  //message.innerHTML = error ? error : '表單驗証通過'

  //寫法二(if..else)
  if (error) {
    message.innerHTML = error
  } else {
    message.innerHTML = '表單驗証通過'
  }
})
