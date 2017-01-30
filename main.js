
var a = document.getElementById("value-one");
var b = document.getElementById("value-two");
var button = document.getElementById("calculate-button");
var calculationDiv = document.getElementById("answer");

function calculate () {
    var finalcalc = Number(a.value) + Number(b.value);
    console.log(finalcalc);
    calculationDiv.innerHTML = finalcalc;
}

button.addEventListener('click', calculate);
