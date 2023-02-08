const billInputEl = document.getElementById("bill");
const tipBtns = document.querySelectorAll(".tips");
const customTipEl = document.getElementById("custom-tip");
const numPeopleEl = document.getElementById("num-people");

const totalTipEl = document.getElementById("total--tip");
const totalBillEl = document.getElementById("total--bill");
const resetBtn = document.getElementById("reset-btn");

const errorTextEl = document.querySelector(".num-people-text-error");

// //////////////////////////
billInputEl.addEventListener("input", setBillValue);

tipBtns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

customTipEl.addEventListener("input", setTipCustomValue);

numPeopleEl.addEventListener("input", setPeopleValue);

resetBtn.addEventListener("click", reset);
