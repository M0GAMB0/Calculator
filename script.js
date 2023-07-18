var var_1 = 0;
var var_2 = 0;
var var_global = '';
var sym = '';
var answer = 0;
var isAnswered = false;
var isDecimal = false;
var isEqClicked = false;
const clearDisplay = () => {
  const disp = document.getElementById('display');
  var_1 = 0;
  var_2 = 0;
  var_global = '';
  sym = '';
  globalNum = 0;
  answer = 0;
  isDecimal = false;
  disp.innerText = String(0);
};
const display = (num) => {
  const disp = document.getElementById('display');

  const currVal = disp.innerText;
  // console.log(currVal === '');

  if (currVal === '0') {
    disp.innerText = String(num);
    var_global = String(num);
  } else if (isAnswered) {
    disp.innerText = String(num);
    const ans = document.getElementById('ans');
    ans.innerText = '';
    var_global = String(num);
  } else {
    var_global += String(num);
    disp.innerText += String(num);
  }
  console.log(disp.innerText);
};
const bs = () => {
  console.log('triggered');
  const disp = document.getElementById('display');
  const currVal = disp.innerText;
  disp.innerText = currVal.slice(0, currVal.length - 1);
  if (disp.innerText == '') {
    disp.innerText = String(0);
  }
};
const arith = (symbol) => {
  var_global = '';
  const disp = document.getElementById('display');
  if (isAnswered === true) {
    disp.innerText = String(answer);
  }
  if (sym === '') {
    isDecimal = false;
    var_1 = Number(disp.innerText);
    sym = symbol;
    globalNum = 0;
    disp.innerText += symbol;
  }
};
const addDecimal = () => {
  if (!isDecimal) {
    isDecimal = true;
    const disp = document.getElementById('display');
    disp.innerText += '.';
  }
};
const calculate = () => {
  isDecimal = false;
  var_2 = Number(var_global);
  console.log(sym);

  switch (sym) {
    case '+':
      answer = var_1 + var_2;
      var_1 = answer;
      console.log(var_1, var_2);
      break;
    case '-':
      answer = var_1 + var_2;
      var_1 = answer;
      break;
    case '/':
      answer = var_1 / var_2;
      var_1 = answer;
      break;
    case '*':
      answer = var_1 * var_2;
      var_1 = answer;
      break;
    default:
      break;
  }

  const ans = document.getElementById('ans');
  ans.innerText = String(answer);
  sym = '';
  isAnswered = true;
};
