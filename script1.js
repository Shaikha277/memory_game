const CARDS = document.querySelectorAll(".CARDS")
// have an array to keep track of cards that have been clicked
let cardsAlreadyClicked = []
const winnig = () => {
  if (winarray.length === 12) {
    alert("WOWW NICCCCCCE YOU WON !!!!!")
  }
}
let winarray = []

const cardClick = (evt) => {
  let notClick = false
  if (notClick === true) {
    return
  }

  const clickedCard = evt.target
  const cardColor = clickedCard.getAttribute("color")
  // get the id of the card
  const cardId = clickedCard.getAttribute("id")
  cardsAlreadyClicked.push(cardColor, cardId)
  clickedCard.classList.add(cardColor)
  console.log(cardsAlreadyClicked)
  // check if there are two cards in the array
  const numberOfCardsClicked = cardsAlreadyClicked.length

  //if there are two cards in the array
  if (numberOfCardsClicked === 4) {
    notClick = true
    //check if the values are the same:
    if (cardsAlreadyClicked[0] === cardsAlreadyClicked[2]) {
      console.log("match")
      winarray.push(1)
      winnig()
      cardsAlreadyClicked = []
    } else {
      console.log("different")
      const cardOne = document.getElementById(cardsAlreadyClicked[1])
      const cardTwo = document.getElementById(cardsAlreadyClicked[3])
      setTimeout(() => {
        cardOne.classList.remove(cardsAlreadyClicked[0])
        cardTwo.classList.remove(cardsAlreadyClicked[2])
        cardsAlreadyClicked = []
        notClick = false
      }, "1000")
    }
  }
}

CARDS.forEach((card) => {
  card.addEventListener("click", cardClick)
})
