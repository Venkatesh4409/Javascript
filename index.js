const dice = document.querySelector(".dice");
const button = document.querySelector(".btn");
const history = document.querySelector(".history");

const historyStore = [];

button.addEventListener("click", () => {
  dice.classList.add("dice-animation");
  setTimeout(() => {
    dice.classList.remove("dice-animation");
    diceChange();
  }, 1000);
});

function diceChange() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const diceFace = chooseDice(randomNumber);
  dice.innerHTML = diceFace;
  historyStore.push(randomNumber);
  updateHistory();
}

function updateHistory() {
  history.innerHTML = "";
  for (let i = 0; i < historyStore.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${chooseDice(
      historyStore[i]
    )}</span>`;
    history.appendChild(listItem);
  }
}

function chooseDice(n) {
  switch (n) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
  }
}
