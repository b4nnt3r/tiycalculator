var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var clear = document.getElementById("clear");
var backSpace = document.getElementById("backSpace");
var equals = document.querySelector(".equals");
var display = document.querySelector(".display");
var topbar = document.querySelector("#sweet");
var botbar = document.querySelector("#sweeter");
var buttons = document.getElementsByClassName("button");
var symbols = document.getElementsByClassName("symbol");


var allNumbers = []

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    var valueAsInteger = parseInt(event.target.value);
    allNumbers.push(valueAsInteger);
    topbar.value += event.target.value;
  })
};

add.addEventListener("click", function(event) {
  topbar.value += "+";
  allNumbers.push("+");
});
subtract.addEventListener("click", function(event) {
  topbar.value += "-";
  allNumbers.push("-");
});
divide.addEventListener("click", function(event) {
  topbar.value += "/";
  allNumbers.push("/");
});
multiply.addEventListener("click", function(event) {
  topbar.value += "*";
  allNumbers.push("*");
});

equals.addEventListener("click", function(event) {
  var a = allNumbers[0];
  var b = allNumbers[2];
  if (allNumbers[1] === "+") {
    var outcome = a + b;
  } else if (allNumbers[1] === "-") {
    var outcome = a - b;
  } else if (allNumbers[1] === "/") {
    var outcome = a / b;
  } else if (allNumbers[1] === "*") {
    var outcome = a * b;
  }
  botbar.value = outcome;
  topbar.value = "";
});
clear.addEventListener("click", function(event) {
  topbar.value = "";
  botbar.value = "";
  allnumbers = [];

});
