const CARDS = document.querySelector(".CARDS")
CARDS.addEventListener("click", (clicked) => {
  console.log("clicked")
  CARDS.classList.add("zero")
  if (clicked == true) {
    one.style.backgroundColor = "red"
  }
})

const one = document.querySelector("#one.CARDS")
one.addEventListener("click", () => {
  console.log("clicked")
  one.classList.add("one")
})
if (clicked == true) {
  one.style.backgroundColor = "white"
}
