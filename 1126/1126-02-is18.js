const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')
const checkAge = document.getElementById('checkAge')
const message = document.getElementById('message')

//===下拉式選單設定=================================
//西元年呈現-1910-2010
let yearOptionString = '<option value="0">請選擇西元年</option>'
for (let i = 1910; i < 2011; i++) {
  yearOptionString += `<option value="${i}">${i}</option>`
}
// 將西元年的選項值呈現
year.innerHTML = yearOptionString

// 月份呈現
let monthOptionString = '<option value="0">請選擇月份</option>'
for (let i = 1; i < 13; i++) {
  monthOptionString += `<option value="${i}">${i}</option>`
}
// 將月份的選項值呈現
month.innerHTML = monthOptionString

// 日期呈現
let dateOptionString = '<option value="0">請選擇日期</option>'
for (let i = 1; i < 32; i++) {
  dateOptionString += `<option value="${i}">${i}</option>`
}
// 將日期的選項值呈現
date.innerHTML = dateOptionString

/// 記錄目前使用者選擇的值(數字)
let birthY = 0
let birthM = 0
let birthD = 0

year.addEventListener('change', function () {
  // 更新選擇的變數值
  birthY = +year.value

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

date.addEventListener('change', function () {
  // 更新選擇的變數值
  birthD = +date.value

  // 觀察目前使用者選擇的情況
  console.log(birthY, birthM, birthD)
})

// 檢查是否滿18歲
checkAge.addEventListener('click', function () {
  //假設出生的年月日都有值後
  if (birthY && birthM && birthD) {
    // 獲取當下的時間日期物件
    const now = new Date()

    // 月份：0~11的值，10代表11月
    const nowM = now.getMonth() + 1
    const nowY = now.getFullYear()
    const nowD = now.getDate()

    console.log('now', nowY, nowM, nowD)

    // 布林值預設沒有超過18歲(false)
    let isOver18 = false

    //如果現在年份-出生年份>18
    //滿18歲
    if (nowY - birthY > 18) isOver18 = true
    //如果現在年份-出生年份=18
    //且現在月份-生日月分>0
    //滿18歲
    if (nowY - birthY === 18 && nowM - birthM > 0) isOver18 = true
    //如果現在年份-出生年份=18
    //且現在月份-生日月分=0
    //且現在日期-出生日期>0
    //滿18歲
    if (nowY - birthY === 18 && nowM - birthM === 0 && nowD - birthD > 0)
      isOver18 = true

    message.innerHTML = isOver18 ? '滿18歲' : '未滿18歲'
  } else {
    alert('請先選擇出生年月日')
    message.innerHTML = ''
  }
})
