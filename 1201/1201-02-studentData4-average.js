const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
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

//先以分行符號來取得多行陣列值
const rawDataArray = rawData.split('\n')

console.log(rawDataArray)

// 將陣列索引[0]改造─連鎖語法：replaceAll將多餘的("")去掉，然後再用逗號分取陣列值(分割成陣列)
const titleArray = rawDataArray[0].replaceAll('"', '').split(',')

console.log(titleArray)

let dataDisplay = ''

// 學生資料標題呈現部份
let titleDisplay = ''

for (let i = 0; i < titleArray.length; i++) {
  titleDisplay += `<th>${titleArray[i]}</th>`
}

dataDisplay += `<thead><tr>${titleDisplay}</tr></thead>`

// 學生資料內容呈現部份(3個)=========================================
let bodyDisplay = ''

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
  //把student學生資料放進studentArray
  studentArray.push(student)
}

console.log(studentArray)

let chineseTotal = 0
let mathTotal = 0
let englishTotal = 0

//把studentArray的姓名和各科成績印在網頁上
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

console.log(
  (chineseTotal / studentArray.length).toFixed(0),
  (mathTotal / studentArray.length).toFixed(0),
  (englishTotal / studentArray.length).toFixed(0)
)

//顯示每個人的各科總平均(運用studentArray計算)
bodyDisplay += `<tr>
                  <td>各科總平均</td>
                  <td>${(chineseTotal / studentArray.length).toFixed(0)}</td>
                  <td>${(mathTotal / studentArray.length).toFixed(0)}</td>
                  <td>${(englishTotal / studentArray.length).toFixed(0)}</td>
                <tr>`

dataDisplay += `<tbody>${bodyDisplay}</tbody>`

// 最後呈現在網頁的table標記裡
data.innerHTML = dataDisplay
