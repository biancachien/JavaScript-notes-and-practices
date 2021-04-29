const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"陳花花",80,60,70
"張大頭",80,75,60
"李一百",100,60,85`

// 學生資料的物件
// {
//   name: '李一百',
//   chinese: 100,
//   math: 60
//   english: 85
// }

const data = document.getElementById('data')
const searchWord = document.getElementById('searchWord')
const search = document.getElementById('search')
const sortAscMath = document.getElementById('sortAscMath')
const sortDescMath = document.getElementById('sortDescMath')
const sortAscChinese = document.getElementById('sortAscChinese')
const sortDescChinese = document.getElementById('sortDescChinese')

//函式-專門用於呈現學生資料========================================================
function displayStudentData(studentArray) {
  let bodyDisplay = ''
  let chineseTotal = 0
  let mathTotal = 0
  let englishTotal = 0

  for (let i = 0; i < studentArray.length; i++) {
    bodyDisplay += `<tr>
                      <td>${studentArray[i].name}</td>
                      <td>${studentArray[i].chinese}</td>
                      <td>${studentArray[i].math}</td>
                      <td>${studentArray[i].english}</td>
                    </tr>`

    chineseTotal += studentArray[i].chinese
    mathTotal += studentArray[i].math
    englishTotal += studentArray[i].english
  }

  bodyDisplay += `<tr>
  <td>各科總平均</td>
  <td>
    ${(chineseTotal / studentArray.length).toFixed(0)}
  </td>
  <td>
    ${(mathTotal / studentArray.length).toFixed(0)}
  </td>
  <td>
    ${(englishTotal / studentArray.length).toFixed(0)}
  </td>
<tr>`

  return bodyDisplay
}

//函式-專門用於排序(依各科成績)學生資料==================================================
//asc(由小到大)desc(由大到小)
function sortStudentData(studentArray, field, direction = 'asc') {
  // 宣告一個新的陣列，由傳入參數拷貝得來
  // sort為有副作用的方法，用此方法以避免studentArray的值被改變
  const newStudentArray = [...studentArray]

  if (direction === 'asc')
    newStudentArray.sort(function (a, b) {
      // 由小到大排序(a[field] - b[field])
      // []動態的物件屬性名稱，用類似陣列的方括號語法
      return a[field] - b[field]
    })
  else
    newStudentArray.sort(function (a, b) {
      // 由大到小排序(b[field] - a[field])
      // 動態的物件屬性名稱，用類似陣列的方括號語法
      return b[field] - a[field]
    })

  return newStudentArray
}

//先以分行符號來取得多行陣列值
const rawDataArray = rawData.split('\n')

// 將陣列索引[0]改造─連鎖語法：replaceAll將多餘的("")去掉，然後再用逗號分取陣列值(分割成陣列)
const titleArray = rawDataArray[0].replaceAll('"', '').split(',')

// 學生資料【標題】呈現部份=========================================================================
let titleDisplay = ''

for (let i = 0; i < titleArray.length; i++) {
  titleDisplay += `<th>${titleArray[i]}</th>`
}

titleDisplay = `<thead><tr>${titleDisplay}</tr></thead>`

// 學生資料【內容】呈現部份=========================================================================

const studentArray = []

for (let i = 1; i < rawDataArray.length; i++) {
  // 從每個陣列取得內部的陣列值
  const bodyArray = rawDataArray[i].replaceAll('"', '').split(',')

  console.log('bodyArray', bodyArray)

  const student = {
    name: bodyArray[0],
    chinese: +bodyArray[1],
    math: +bodyArray[2],
    english: +bodyArray[3],
  }

  studentArray.push(student)
}

// 第一次呈現在網頁的table標記裡
data.innerHTML =
  titleDisplay + `<tbody>${displayStudentData(studentArray)}</tbody>`

//按下查詢按鈕====================================================================================
search.addEventListener('click', function () {
  //得到查詢字串的值
  // const nameSearchWord = searchWord.value
  //過濾僅包含查詢字串的姓名者的資料
  const newStudentArray = studentArray.filter(function (value) {
    return value.name.includes(searchWord.value)
  })
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

//按下排序按鈕(數學，由小到大)======================================================================
sortAscMath.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'math', 'asc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

//按下排序按鈕(數學，由大到小)======================================================================
sortDescMath.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'math', 'desc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

//按下排序按鈕(國文，由小到大)======================================================================
sortAscChinese.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'chinese', 'asc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})

//按下排序按鈕(國文，由小到大)======================================================================
sortDescChinese.addEventListener('click', function () {
  const newStudentArray = sortStudentData(studentArray, 'chinese', 'desc')
  data.innerHTML =
    titleDisplay + `<tbody>${displayStudentData(newStudentArray)}</tbody>`
})
