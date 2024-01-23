const CARDS = document.querySelectorAll(".CARDS")
// have an array to keep track of cards that have been clicked
let cardsAlreadyClicked = []

const cardClick = (evt) => {
  const clickedCard = evt.target
  const cardColor = clickedCard.getAttribute("color")
  cardsAlreadyClicked.push(cardColor)
  console.log(cardsAlreadyClicked)
  // check if there are two cards in the array
  const numberOfCardsClicked = cardsAlreadyClicked.length

  //if there are two cards in the array
  if (numberOfCardsClicked === 2) {
    //check if the values are the same:
    if (cardsAlreadyClicked[0] === cardsAlreadyClicked[1]) {
      console.log("ckl")
      cardsAlreadyClicked = []
    }
    //get card 1 from the array
    const cardOne = cardsAlreadyClicked[0]
    //get card 2 from the array
    const cardTwo = cardsAlreadyClicked[1]
    //if card 1 equals to card 2
    if (cardOne === cardTwo) {
      //console.log("match")
      console.log("match")
    }
    if (cardOne !== cardTwo) {
      console.log("different")
      cardsAlreadyClicked = []
    }
  }
}

CARDS.forEach((card) => {
  card.addEventListener("click", cardClick)
})

//const CARDS = document.querySelector(".container")
// CARDS.addEventListener("click", () => {
//   console.log("clicked")
// })

// const CARD = [""]
// const copyCards = [""]
// let matching = true
// let firstCard, SecondCard

// const colors = ["red", "blue", "yellow", "purple", "green"]
// function matching(array) {
//   let counter = array.length
//   while (counter > 0) {
//     let
//   }
// }
// console.log(blacked)
//let arrayCardId = []
//CARDS.sort(() => Math.random() - 0.5)
// const CARDS = document.querySelectorAll(".CARDS")
//let CARDSarray = []
// for (let i = 0; i < array.length; i++) {
//copyCards.push(CARD[i])

//   CARDS[5].addEventListener("click", flipCard)
//   function flipCard() {
//     document.querySelector("#five.CARDS")
//     CARDS[5].classList.add("card5")
//     console.log("clicked")
//   }
//   CARDS[3].addEventListener("click", flip)
//   function flip() {
//     document.querySelector("#three.CARDS")
//     CARDS[3].classList.add("card3")
//     console.log("clicked")
//   }
//   CARDS[i].addEventListener("click", () => {
//     document.querySelectorAll(".CARDS")
//     CARDS[i].classList.add("card0")
//     console.log("clicked")
//   })
// }

// {
//CARDS[i].classList.add("one")
// const logArrayElements = (element, index[0])
// console.log(`a[${index}]=${element}`)
// array.forEach((element) => {})
// console.log(logArrayElements)
//CARD.forEach((card) => {
//copyCards.push(card)
// }

// CARDS.classList.add("one")
// const change = () => {
//   document.querySelector("#zero.CARDS").classList.toggle("white")
// }
// const color = () => {
//   document.querySelector("#one.CARDS").classList.toggle("white")
// }

// const zero = document.querySelectorAll("#zero")
// // const one = document.querySelector("#one.CARDS")
// // // if (){

// // }
// // zero.addEventListener("click", change)
// // one.addEventListener("click", color)
// zero.addEventListener("click", () => {
//   console.log("clicked")
//   zero.classList.add("zero")
//   //   if (change == true) {
//   //   }
//   //   //CARDS.classList("toggle")
// })

// one.addEventListener("click", () => {
//   console.log("clicked")
//   one.classList.add("one")
// })
// if (clicked == true) {
//   one.style.backgroundColor = "white"
//
