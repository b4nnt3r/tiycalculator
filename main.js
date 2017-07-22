let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let clear = document.getElementById("clear");
let backSpace = document.getElementById("backSpace");
let equals = document.querySelector(".equals");
let display = document.querySelector(".display");
let topbar = document.querySelector("#sweet");
let botbar = document.querySelector("#sweeter");
let buttons = document.getElementsByClassName("button");
let symbols = document.getElementsByClassName("symbol");


let allNumbers = []

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    let valueAsInteger = parseInt(event.target.value);
    allNumbers.push(valueAsInteger);
    topbar.value += event.target.value;
    // console.log(event);
  })
};

// for (let i = 0; i < symbols.length; i++) {
//  symbols[i].addEventListener("click", function(event){
//     let valueAsInteger = parseInt(event.target.value);
//     allNumbers.push(valueAsInteger);
//     topbar.value += event.target.value;
//   })
// };
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

// the user clicks on 2
// allNumbers is now [2]

// the user clicks on 3
// allNumbers is now [2,3]

// the user clicks on +
// allNumbers is now [2, 3, "+"]

//second one needs to be concatenated

console.log(allNumbers)

for (let i = 0; i < equals.length; i++) {
  equals.addEventListener("click", function(event) {
    if (allNumbers[i] === NaN) {
      // for (let x = 0; x < equals.length; x++) {
      let result = "+"

      // let a = allNumbers[i];
      // let b = allNumbers[i];
      // if (allNumbers[i] === "+") {
      //   let result = parseInt(a + b);
      // } else if (allNumbers[i] === "-") {
      //   let result = parseInt(a - b);
      // } else if (allNumbers[i] === "/") {
      //   let result = parseInt(a / b);
      // } else if (allNumbers[i] === "*") {
      //   let result = parseInt(a * b);
      // }
    } else {
      let result = parseInt(allNumbers[i]);

    };
    console.log(result);
    botbar.value = result;


    clear.addEventListener("click", function(event) {
      topbar.value = "";
      botbar.value = "";
      allNumbers = [];
    });


    backSpace.addEventListener("click", function(event) {
      function backSpace(i) {
        botbar.value = botbar.value.substring(0, botbar.value.length - 1);


      };

    });
  });

};




  // equals.addEventListener("click", function() {
  // console.log(equals);
  // });

  // let x;
  // let y;
  // let product;
  // let operation;
  // let value = 0;


  // function addition() {
  //   operation = "+";
  //   botbar.value = topbar.value + operation
  //
  //   x = parseInt(topbar.value);
  //   botbar.value = topbar.value;
  //   topbar.value = x + operation;
  //   console.log(botbar.value, topbar.value);
  // }



  // function choices(choice) {
  //     console.log(choice);
  // }




  // function clr() {
  //   topbar.value = "0";
  //   botbar.value = "";
  //   return;
  // }
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

  // function divide() {
  //   operation = "/";
  //   x = parseInt(topbar.value);
  //   botbar.value = topbar.value;
  //   topbar.value = x + operation;
  //   console.log(botbar.value, topbar.value);
  // }

  // function divide() {
  //   operation = "/";
  //   x = parseInt(topbar.value);
  //   topbar.value = botbar.value;
  //   console.log(botbar.value, topbar.value);
  // }

  // function operationperc() {
  //   operation = "%";
  //   x = parseInt(botbar.value);
  //   botbar.value = "0";
  //   topbar.value = x + operation;
  // }

  // function equals() {
  //   y = parseInt(botbar.value);
  //   if (operation == "+") {
  //     product = x + y;
  //   } else if (operation == "*") {
  //     product = x * y;
  //   } else if (operation == "-") {
  //     product = x - y;
  //   } else if (operation == "/") {
  //     product = x / y;
  //   } else if (operation == "%") {
  //     if (botbar.value == "0") {
  //       product = x / 100;
  //       topbar.value = x + operation + "100";
  //     } else if (botbar.value != "0") {
  //       product = x / y * 100;
  //       topbar.value = x + operation + y + "*100 = " + product;
  //     }
  //   }
  //   topbar.value = "";
  //   // botbar.value = product.toString();
  //   topbar.value = x + operation + y + " = " + product.toString();
  //   return;
  // }
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
