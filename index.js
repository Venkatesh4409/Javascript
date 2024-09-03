const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

btnEl.addEventListener("click", calculateTotal);

function calculateTotal() {
  const billValue = Number(billInput.value);
  const tipPercent = Number(tipInput.value);

  const tipValue = (tipPercent / 100) * billValue;

  const totalValue = billValue + tipValue;

  totalSpan.innerText = totalValue.toFixed(2);
}
