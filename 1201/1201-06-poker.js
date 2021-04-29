const desk = document.getElementById('desk')
const pointTotal = document.getElementById('pointTotal')
const message = document.getElementById('message')
const deal = document.getElementById('deal')

// 工廠函式-建立每張牌的物件值
// size - 牌的像素高度。牌的寬高比固定為3:4。預設值為200。
// suit - 牌面花色
function createCard(suit, point) {
  return { suit, point }
}

// 宣告準要要一副牌加入卡片的陣列
const cards = []
// 花色用的對應陣列
const suitArray = ['h', 'd', 's', 'c']

// 產生一整副牌的物件值
//4個花色([i])
for (let i = 0; i < 4; i++) {
  //13個點數(j+1)
  for (let j = 0; j < 13; j++) {
    cards.push(createCard(suitArray[i], j + 1))
  }
}

console.log(cards)

// poker函式庫產生卡片圖形的參數
// 參考：https://tairraos.github.io/Poker.JS/#chinese-version-readme
// size - 牌的像素高度。牌的寬高比固定為3:4。預設值為200。
// suit - 牌面花色。取值大小寫不敏感，必須為下列[]內的值之一：
// ['h', 'hearts', 'd', 'diamonds', 's', 'spades', 'c', 'clubs']
// 值對應紅桃，方塊，黑桃，梅花, 'h', 'd', 's', 'c' 是縮寫
// 當牌面點數為'JOKER'時，紅桃和方塊表示牌為大王；黑桃和梅花表示牌為小王。
// 預設值為'h'
// point - 牌面點數。取值不分大小寫，必須為下列[]內的值之一：
// ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'O', 'JOKER']
// 'O'(字母O)是'JOKER'的縮寫
// 預設值為'O'

//呈現兩張牌(類似innerHTML的效果)
desk.appendChild(Poker.getCardImage(60, 'h', 'q'))
desk.appendChild(Poker.getCardImage(60, 'h', 3))
