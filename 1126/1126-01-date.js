const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')

// 西元年呈現倒過來的順序-2010-1910
// let yearOptionString2 = ''
// for (let i = 2010; i > 1909; i--) {
//   yearOptionString2 += `<option value="${i}">${i}</option>`
// }

// ===西元年呈現(1910-2010)====================
//下拉式選單名稱
let yearOptionString = '<option value="0">請選擇西元年</option>' //0為預設，顯示請選擇西元年

//下拉式選單內容
for (let i = 1910; i < 2011; i++) {
  // 一般的字串串接寫法↓↓
  //yearOptionString += '<option value="' + i + '">' + i + '</option>'

  //樣板字串寫法-使用樣版字串代入變數i↓↓(較佳)
  yearOptionString += `<option value="${i}">${i}</option>`
}
// 將西元年的選項值呈現
year.innerHTML = yearOptionString

// ===月份呈現=================================
let monthOptionString = '<option value="0">請選擇月份</option>'
for (let i = 1; i < 13; i++) {
  monthOptionString += `<option value="${i}">${i}</option>`
}
// 將月份的選項值呈現
month.innerHTML = monthOptionString

// ===日期呈現=================================
let dateOptionString = '<option value="0">請選擇日期</option>'
for (let i = 1; i < 32; i++) {
  dateOptionString += `<option value="${i}">${i}</option>`
}
// 將日期的選項值呈現
date.innerHTML = dateOptionString

// 記錄目前使用者選擇的值(數字)
let birthY = 0
let birthM = 0
let birthD = 0

// ===更新下拉選單的變數值==========================
year.addEventListener('change', function () {
  // change更新選擇的變數值
  birthY = +year.value //加+將年轉成數值

  // 當使用者選到了年和月時才作更新日期選項
  if (birthY && birthM) {
    // 得到該西元年、月應該要有幾天(公式)
    const days = new Date(birthY, birthM, 0).getDate()
    //日期呈現
    let dateOptionString = '<option value="0">請選擇日期</option>'
    for (let i = 1; i < days + 1; i++) {
      dateOptionString += `<option value="${i}">${i}</option>`
    }

    // 將日期的選項值呈現刷新
    date.innerHTML = dateOptionString

    // 日期恢復預設值為0
    birthD = 0
  }
  console.log(birthY, birthM, birthD)
})

// ===更新下拉選單的變數值============================
month.addEventListener('change', function () {
  // 更新選擇的變數值
  birthM = +month.value

  // 當有使用者有選到了年和月時才作更新日期選項
  if (birthY && birthM) {
    // 得到該西元年、月應該要有幾天
    const days = new Date(birthY, birthM, 0).getDate()
    /////// 日期呈現
    let dateOptionString = '<option value="0">請選擇日期</option>'
    for (let i = 1; i < days + 1; i++) {
      dateOptionString += `<option value="${i}">${i}</option>`
    }

    // 將日期的選項值呈現刷新
    date.innerHTML = dateOptionString

    // 日期恢復預設值為0
    birthD = 0
  }
  console.log(birthY, birthM, birthD)
})

// ===更新日的變數值============================
date.addEventListener('change', function () {
  // 更新選擇的變數值
  birthD = +date.value

  console.log(birthY, birthM, birthD)
})
