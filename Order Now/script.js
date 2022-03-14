var decrementButtonBroccoli = document.querySelector(".button-increment__before-broccoli");
var incrementButtonBroccoli = document.querySelector(".button-increment__after-broccoli");
var decrementButtonArugula = document.querySelector(".button-increment__before-arugula");
var incrementButtonArugula = document.querySelector(".button-increment__after-arugula");
var decrementButtonRadish = document.querySelector(".button-increment__before-radish");
var incrementButtonRadish = document.querySelector(".button-increment__after-radish");
var orderInputAmountBroccoli = document.getElementById("order-amount__broccoli");
var orderInputAmountArugula = document.getElementById("order-amount__arugula");
var orderInputAmountRadish = document.getElementById("order-amount__radish");
var buttonSubmit = document.querySelector(".submit-button");
var totalDisplayBVar = document.querySelector(".total-broccoli");
var totalDisplayAVar = document.querySelector(".total-arugula");
var totalDisplayRVar = document.querySelector(".total-radish");
var grandTotalVar = document.querySelector(".grand-total");

decrementButtonBroccoli.addEventListener('click', function() {
    orderInputAmountBroccoli.stepDown();
})

decrementButtonArugula.addEventListener('click', function() {
    orderInputAmountArugula.stepDown();
})

decrementButtonRadish.addEventListener('click', function() {
    orderInputAmountRadish.stepDown();
})

incrementButtonBroccoli.addEventListener('click', function() {
    orderInputAmountBroccoli.stepUp();
})

incrementButtonArugula.addEventListener('click', function() {
    orderInputAmountArugula.stepUp();
})

incrementButtonRadish.addEventListener('click', function() {
    orderInputAmountRadish.stepUp();
})

function getVal (inputValue) {
    var value = inputValue.value;
    return value;
}
function totalCalc(orderAmountB, orderAmountA, orderAmountR) {
    const broccoliPrice = 5.00;
    const arugulaPrice = 5.00;
    const radishPrice = 5.50;
    let broccoliTotal = 0;
    let arugulaTotal = 0;
    let radishTotal = 0;
    orderAmountB = getVal(orderInputAmountBroccoli);
    orderAmountA = getVal(orderInputAmountArugula);
    orderAmountR = getVal(orderInputAmountRadish);
    broccoliTotal = (broccoliPrice * orderAmountB).toFixed(2);
    arugulaTotal = (arugulaPrice * orderAmountA).toFixed(2);
    radishTotal = (radishPrice * orderAmountR).toFixed(2);
    return {
        broccoliTotal,
        arugulaTotal,
        radishTotal
    }
}

buttonSubmit.addEventListener('click',function() {
    totalDisplayBVar.innerHTML = "";
    totalDisplayAVar.innerHTML = "";
    totalDisplayRVar.innerHTML = "";
    grandTotalVar.innerHTML = "";
    let grandTotal;
    // total(orderInputAmountBroccoli, orderInputAmountArugula, orderInputAmountRadish);
    totalCalc();
    let totalDisplayB = totalCalc().broccoliTotal;
    let totalDisplayA = totalCalc().arugulaTotal;
    let totalDisplayR = totalCalc().radishTotal;
    grandTotal = (parseFloat(totalDisplayB) + parseFloat(totalDisplayA) + parseFloat(totalDisplayR)).toFixed(2);
    totalDisplayBVar.innerHTML += "Broccoli: $" + totalDisplayB;
    totalDisplayAVar.innerHTML += "Arugula: $" + totalDisplayA;
    totalDisplayRVar.innerHTML += "Radish: $" + totalDisplayR;
    grandTotalVar.innerHTML += "<b>Total: $" + grandTotal + "</b>";
})