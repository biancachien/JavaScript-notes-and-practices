const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

const data = document.getElementById('data')

//先以分行符號來取得多行陣列值
const rawDataArray = rawData.split('\n')

console.log(rawDataArray)

// =========連鎖語法運用(更簡潔&進階寫法)==========

// 學生資料標題呈現部份
data.innerHTML = `<thead><tr>${rawDataArray[0]
  .replaceAll('"', '')
  .split(',')
  .map((v) => `<th>${v}</th>`)
  .join('')}</tr></thead>`

// 學生資料內容呈現部份(3個)
let bodyDisplay = ''

for (let i = 1; i < rawDataArray.length; i++) {
  // 略過第一個(標題用)
  if (i === 0) continue

  // 從每個陣列取得內部的陣列值
  bodyDisplay += `<tr>${rawDataArray[i]
    .replaceAll('"', '')
    .split(',')
    .map((v) => `<td>${v}</td>`)
    .join('')}</tr>`
}

// 最後呈現在網頁的table標記裡
data.innerHTML += `<tbody>${bodyDisplay}</tbody>`
