const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

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

// 學生資料內容呈現部份(3個)
let bodyDisplay = ''

for (let i = 1; i < rawDataArray.length; i++) {
  const bodyArray = rawDataArray[i].replaceAll('"', '').split(',')

  console.log(bodyArray)
  //換行
  bodyDisplay += '<tr>'

  for (let j = 0; j < bodyArray.length; j++) {
    bodyDisplay += `<td>${bodyArray[j]}</td>`
  }
  //換行
  bodyDisplay += '</tr>'
}

dataDisplay += `<tbody>${bodyDisplay}</tbody>`

// 最後呈現在網頁的table標記裡
data.innerHTML = dataDisplay
