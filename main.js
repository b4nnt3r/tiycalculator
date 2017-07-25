var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var clear = document.getElementById("clear");
var backSpace = document.getElementById("backSpace");
var equals = document.querySelector(".equals");
var display = document.querySelector(".display");
var buttons = document.getElementsByClassName("button");
var symbols = document.getElementsByClassName("symbol");

var allNumbers = [];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    var valueAsInteger = parseFloat(event.target.value);
    allNumbers.push(valueAsInteger);
    document.getElementById("sweet").value += event.target.value;
  })
};

add.addEventListener("click", function(event) {
  document.getElementById("sweet").value += "+";
  allNumbers.push("+");
});
subtract.addEventListener("click", function(event) {
  document.getElementById("sweet").value += "-";
  allNumbers.push("-");
});
divide.addEventListener("click", function(event) {
  document.getElementById("sweet").value += "/";
  allNumbers.push("/");
});
multiply.addEventListener("click", function(event) {
  document.getElementById("sweet").value += "*";
  allNumbers.push("*");
});
equals.addEventListener("click", function(event) {
  var a = allNumbers[0];
  var b = allNumbers[2];
  if (allNumbers[1] === "+") {
    var result = a + b;
  } else if (allNumbers[1] === "-") {
    var result = a - b;
  } else if (allNumbers[1] === "/") {
    var result = a / b;
  } else if (allNumbers[1] === "*") {
    var result = a * b;
  }
  document.getElementById("sweeter").value = result;
});
clear.addEventListener("click", function(event) {
  document.getElementById("sweet").value = "";
  allNumbers = [];
});



// the user clicks on 2
// allNumbers is now [2]

// the user clicks on 3
// allNumbers is now [2,3]

// the user clicks on +
// allNumbers is now [2, 3, "+"]
//.split

//second one needs to be concatenated
//
// console.log(allNumbers)
// equals.addEventListener("click", function(event) {
//   var x = allNumbers[0];
//   var y = allNumbers[2];
//
//   var operation;
// let value = 0;
// function equals() {
// y = parseInt(topbar.value);
// var product;
// if (operation === "+") {
//   product = x + y;
// } else if (operation == "*") {
//   product = x * y;
// } else if (operation == "-") {
//   product = x - y;
// } else if (operation == "/") {
//   product = x / y;
// } else if (operation == "%") {
//   if (botbar.value == "0") {
//     product = x / 100;
//     topbar.value = x + operation + "100";
//   } else if (botbar.value != "0") {
//     product = x / y * 100;
//     topbar.value = x + operation + y + "*100 = " + product;
//   }
// }
// topbar.value = "";
// botbar.value = product.toString();
//   botbar.value = x + operation + y + " = " + product;
//   return;
//   console.log();
// });



// equals.addEventListener("click", function(event) {


//   let a = allNumbers[i];
//   let b = allNumbers[x];
//   if (allNumbers[x] === "+") {
//     let result = parseInt(a + b);
//   } else if (allNumbers[x] === "-") {
//     let result = parseInt(a - b);
//   } else if (allNumbers[x] === "/") {
//     let result = parseInt(a / b);
//   } else if (allNumbers[x] === "*") {
//     let result = parseInt(a * b);
//   }
// } else {
//   let result = parseInt(allNumbers[i]);
//
// };
// console.log(result);
// botbar.value = result;
//
//
// clear.addEventListener("click", function(event) {
//   topbar.value = "";
//   botbar.value = "";
//   allNumbers = [];
// });
//
//
// backSpace.addEventListener("click", function(event) {
//   function backSpace(i) {
//     botbar.value = botbar.value.substring(0, botbar.value.length - 1);
//
//


// });





// equals.addEventListener("click", function() {
// console.log(equals);
// });
//

//
// function addition() {
//   operation = "+";
//   botbar.value = topbar.value + operation
//
//   x = parseInt(topbar.value);
//   botbar.value = topbar.value;
//   topbar.value = x + operation;
//   console.log(botbar.value, topbar.value);
// }
//
//
//
// function choices(choice) {
//     console.log(choice);
// }
//
//
//
//
// function clr() {
//   topbar.value = "0";
//   botbar.value = "";
//   return;
// }
//
//
//
// function multiply() {
//   operation = "*";
//   x = parseInt(botbar.value);
//   botbar.value = "0";
//   topbar.value = x + operation;
// }
//
// function subtract() {
//   operation = "-";
//   x = parseInt(topbar.value);
//   // botbar.value = "0";
//   botbar.value = x + operation;
//   console.log(operation);
// }
//
// function divide() {
//   operation = "/";
//   x = parseInt(topbar.value);
//   botbar.value = topbar.value;
//   topbar.value = x + operation;
//   console.log(botbar.value, topbar.value);
// }
//
// function divide() {
//   operation = "/";
//   x = parseInt(topbar.value);
//   topbar.value = botbar.value;
//   console.log(botbar.value, topbar.value);
// }
//
// function operationperc() {
//   operation = "%";
//   x = parseInt(botbar.value);
//   botbar.value = "0";
//   topbar.value = x + operation;
// }
//

//
// function sqrts() {
//   x = botbar.value;
//   product = Math.sqrt(parseInt(botbar.value));
//   botbar.value = product;
//   topbar.value = "sqrt(" + x + ") = " + product;
// }
//
// function reset() {
//   botbar.value = null;
// }
//
// function sqrt() {
//   botbar.value = Math.sqrt(topbar.value);
// }
//
// function sqr() {
//   botbar.value = botbar.value * botbar.value;
// }
//
// function inverse() {
//   botbar.value = 1.00 / botbar.value;
// }
//
//
//
// function textArea() {
//   document.getElementById('textarea');
//   let teb = document.createTextNode(topbar.value);
//   textarea.appendChild(teb);
// }
//
// function textArea2() {
//   document.getElementById('textarea');
//   let xav = document.createTextNode(" = ");
//   let yuz = document.createTextNode(botbar.value);
//   let fen = document.createTextNode("  ");
//   textarea.appendChild(xav);
//   textarea.appendChild(yuz);
//   textarea.appendChild(fen);
// }
//
// function add() {
//   let br = document.createTextNode("\n");
//   let foo = document.getElementById("textarea");
//   foo.appendChild(br);
// }
//
// function symbol1() {
//   document.getElementById('textarea');
//   let xav = document.createTextNode(" √ ");
//   let yuz = document.createTextNode(botbar.value);
//   let fen = document.createTextNode("  ");
//   textarea.appendChild(xav);
//   textarea.appendChild(yuz);
//   textarea.appendChild(fen);
// }
//
// function symbol2() {
//   document.getElementById('textarea');
//   let xav = document.createTextNode(" ² ");
//   let yuz = document.createTextNode(topbar.value);
//   let fen = document.createTextNode("  ");
//   textarea.appendChild(xav);
//   textarea.appendChild(yuz);
//   textarea.appendChild(fen);
// }
//
// function symbol3() {
//   document.getElementById('textarea');
//   let xav = document.createTextNode(" 1/ ");
//   let yuz = document.createTextNode(topbar.value);
//   let fen = document.createTextNode("  ");
//   textarea.appendChild(xav);
//   textarea.appendChild(yuz);
//   textarea.appendChild(fen);
// }
