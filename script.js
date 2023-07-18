var var_1 = 0;
var var_2 = 0;
var sym = '';
var globalNum = 0;
var answer = 0;
var isDecimal = false;
const clearDisplay = () => {
  const disp = document.getElementById('display');
  var_1 = 0;
  var_2 = 0;
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
    globalNum = num;
  } else {
    disp.innerText += String(num);
    globalNum = Number(disp.innerText);
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
  if (sym === '') {
    isDecimal = false;
    const disp = document.getElementById('display');
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
  var_2 = globalNum;
  console.log(sym);
  switch (sym) {
    case '+':
      answer = var_1 + var_2;
      console.log(var_1, var_2);
      break;
    case '-':
      answer = var_1 + var_2;
      break;
    case '/':
      answer = var_1 / var_2;
      break;
    case '*':
      answer = var_1 * var_2;
      break;
    default:
      break;
  }
  const ans = document.getElementById('ans');
  ans.innerText = String(answer);
  sym = '';
};
