const display = document.querySelector(".age");
const age = document.querySelector(".para");
const text = document.getElementById("inpt");

display.addEventListener("click", displayAge);

function displayAge() {
  const calculate = text.value;
  if (calculate) {
    const date = new Date();
    const year = Number(date.getFullYear());
    const previousYear = Number(calculate.split("-")[0]);
    const presentYear = year - previousYear;
    age.innerText = `Year age is ${presentYear}  years old`;
  } else {
    alert("please enter your birthday");
  }
}
