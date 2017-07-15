function result() {
  cal.input.value = eval(cal.input.value);
}

function reset() {
  cal.input.value = null;
}

function sqrt() {
  cal.input.value = Math.sqrt(cal.input.value);
}

function sqr() {
  cal.input.value = cal.input.value * cal.input.value;
}

function inverse() {
  cal.input.value = 1.00 / cal.input.value;
}

function delChar(i) {
  cal.input.value = cal.input.value.substring(0, cal.input.value.length - 1);
}

var x = document.getElementById("sweet");
console.log(x);
