//先宣告
const text = document.getElementById('text')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const apply = document.getElementById('apply')

/////////////////////////////////////////////////////////////
//基本款--會有小缺失(沒有補零機制)

//apply綁定監聽者-寫法一
// 加掛事件監聽器(監聽事件類型，要做什麼函式，boolean)
apply.addEventListener('click', function () {
  //由10進位數字(255)改成16進位字串
  const hexColor1 = (+color1.value).toString(16)
  const hexColor2 = (+color2.value).toString(16)
  const hexColor3 = (+color3.value).toString(16)
  //改變html裡hello world顯示的文字顏色(字串連接成色碼)
  text.style.color = '#' + hexColor1 + hexColor2 + hexColor3
})

//apply綁定監聽者-寫法二
apply.addEventListener('click', function () {
  let color = '#' //先設定一個變數，再往下加
  //可寫成color += (+color1.value).toString(16)
  color = color + (+color1.value).toString(16)
  //可寫成color += (+color2.value).toString(16)
  color = color + (+color2.value).toString(16)
  //可寫成color += (+color3.value).toString(16)
  color = color + (+color3.value).toString(16)

  text.style.color = color
})
//////////////////////////////////////////////////////////////
//完整版(直接看此即可)
//寫法一
apply.addEventListener('click', function () {
  // 讓數字轉字串成(16進位)
  let hexColor1 = (+color1.value).toString(16)
  //若長度小於2就補0
  if (hexColor1.length < 2) hexColor1 = '0' + hexColor1

  let hexColor2 = (+color2.value).toString(16)
  if (hexColor2.length < 2) hexColor2 = '0' + hexColor2

  let hexColor3 = (+color3.value).toString(16)
  if (hexColor3.length < 2) hexColor3 = '0' + hexColor3

  text.style.color = '#' + hexColor1 + hexColor2 + hexColor3
})

//寫法二
apply.addEventListener('click', function (num) {
  let color = '#'
  color +=
    (+color1.value).toString(16).length < 2
      ? '0' + num.toString(16)
      : num.toString(16)

  color +=
    (+color2.value).toString(16).length < 2
      ? '0' + num.toString(16)
      : num.toString(16)

  color +=
    (+color3.value).toString(16).length < 2
      ? '0' + num.toString(16)
      : num.toString(16)
})

text.style.color = color
/////////////////////////////////////////////////////////////
//進階寫法可先不看

//最簡潔版本寫法
// function decimal2Hex(num) {
//   return num.toString(16).length < 2 ? '0' + num.toString(16) : num.toString(16)
// }

// //次簡潔版法寫法
// function decimal12Hex(num) {
//     let hexString = num.toString(16)

//     if (num.toString(16).length < 2 {
//         hexString = '0' + num.toStrimg(16)
//     }

//     return hexString
// }

// // 加掛事件監聽器(類型, 要作什麼的函式)
// apply.addEventListener('click', function () {
//     console.log(
//       decimal2Hex(+color1.value) +
//       decimal2Hex(+color2.value) +
//       decimal2Hex(+color3.value)
//     )

//     // 字串連接成色碼
//     text.style.color =
//       '#' +
//       decimal2Hex(+color1.value) +
//       decimal2Hex(+color2.value) +
//       decimal2Hex(+color3.value)
//   })
