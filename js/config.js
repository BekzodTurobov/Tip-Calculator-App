let billValue = 0.0;
let tipValue = "";
let peopleValue = 1;

// //////////////////////////////////////////
// SET BILL VALUE
// //////////////////////////////////////////
function setBillValue() {
  if (billInputEl.value.includes(",")) {
    billInputEl.value = billInputEl.value.replace(",", ".");
  }

  if (!validateFloat(billInputEl.value)) {
    billInputEl.value = billInputEl.value.substring(
      0,
      billInputEl.value.length - 1
    );
  }

  billValue = billInputEl.value ? billInputEl.value : ""; /////

  calculateTip();
}

// //////////////////////////////////////////
// VALIDATE FLOAT & INTEGER
// //////////////////////////////////////////
// 1 ////////
function validateFloat(n) {
  var rgx = /^[0-9]*\.?[0-9]*$/;
  return n.match(rgx);
}

// 2 ////////
function validateInt(n) {
  var rgx = /^[0-9]*$/;
  return n.match(rgx);
}

// //////////////////////////////////////////
// TIP BUTTONS
// //////////////////////////////////////////

function handleClick(event) {
  tipBtns.forEach((btn) => {
    if (event.target.value == btn.value) {
      tipValue = btn.value / 100;
    }
  });

  //clear custom tip
  customTipEl.value = "";

  calculateTip();
}

// //////////////////////////////////////////
// SET CUSTOM TIP
// //////////////////////////////////////////
function setTipCustomValue() {
  if (!validateInt(customTipEl.value)) {
    customTipEl.value = customTipEl.value.substring(
      0,
      customTipEl.value.length - 1
    );
  }

  tipValue = customTipEl.value ? customTipEl.value / 100 : ""; /////

  calculateTip();
  //
  tipBtns.forEach((btn) => (btn.checked = false));
}

// //////////////////////////////////////////
// SET PEOPLE VALUE
// //////////////////////////////////////////

function setPeopleValue() {
  if (!validateInt(numPeopleEl.value)) {
    numPeopleEl.value = numPeopleEl.value.substring(
      0,
      numPeopleEl.value.length - 1
    );
  }

  peopleValue = numPeopleEl.value ? numPeopleEl.value : 1; /////

  if (peopleValue <= 0) {
    errorTextEl.style.display = "block";
    numPeopleEl.classList.add("error");
    numPeopleEl.value = "";
    setTimeout(() => {
      errorTextEl.style.display = "none";
      numPeopleEl.classList.remove("error");
    }, 3000);
  }

  calculateTip();
}

// //////////////////////////////////////////
// CALCULATE TIP
// //////////////////////////////////////////

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;

    let total = (billValue * (tipValue + 1)) / peopleValue;

    totalTipEl.innerHTML = "$" + tipAmount.toFixed(2);
    totalBillEl.innerHTML = "$" + total.toFixed(2);
  }
}

// //////////////////////////////////////////
// RESET
// //////////////////////////////////////////

function reset() {
  billInputEl.value = 0;
  setBillValue();

  tipValue = "";
  calculateTip();

  numPeopleEl.value = 1;
  setPeopleValue();

  totalTipEl.innerHTML = "$0.00";
  totalBillEl.innerHTML = "$0.00";

  errorTextEl.style.display = "none";
  numPeopleEl.classList.remove("error");
}
