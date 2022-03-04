const billInput = document.querySelector('#billInp')
const peopleInput = document.querySelector('#people')
const tips = document.querySelectorAll(".tip-list")
let tipPerPerson = document.getElementById("tip-amount");
let totalPerPerson = document.getElementById("total-amount");
const resetBtn = document.querySelector(".reset-btn");
const tipCustom = document.querySelector("#custom-tip");
const error = document.querySelector(".error");

//declare value for variables
billInput.value = "0";
peopleInput.value = "0"
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

//set them to 0
let billValue = 0.0
let peopleValue = 0
let tipValue = 0

billInput.addEventListener("input", billInputFun)
peopleInput.addEventListener("input", peopleInputFun)
tipCustom.addEventListener("input",customTipFun)
tips.forEach(function (val) {
  val.addEventListener('click', handleClick)
})

//for any chages make output right away 
function billInputFun() {
  billValue = parseFloat(billInput.value)
  tipCalculator()
}

function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value)
  tipCalculator()
}

function customTipFun() {
  tipValue = parseFloat(tipCustom.value / 100)
  tipCalculator()
}

function handleClick(event) {
  tips.forEach(function (val) {
    if(event.target.innerHTML == val.innerHTML)
      tipValue = parseFloat(val.innerHTML) / 100
  })
  tipCalculator()
}

//calculator
function tipCalculator() {
  if (peopleValue >= 1) {
    error.style.display = "none"
    let tipsAmount = (billValue * tipValue) / peopleValue
    let total = (billValue + tipsAmount) / peopleValue

    totalPerPerson.innerHTML = "$" + total.toFixed(2);
    tipPerPerson.innerHTML = "$" + tipsAmount.toFixed(2);
  }
  else {
    error.style.display = "inline"
  }
}

function resetPage() {
  billInput.value = "0";
  peopleInput.value = "0"
  tips.values = "0"
  tipCustom.value = "0"
  tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
}