var var_1 = 0;
var var_2 = 0;
var var_global = '';
var sym = '';
var answer = 0;
var isAnswered = false;
var isDecimal = false;// var var_1 = 0;
// var var_2 = 0;
// var var_global = '';
// var sym = '';
// var answer = 0;
// var isAnswered = false;
// var isDecimal = false;
// var isEqClicked = false;
// const clearDisplay = () => {
//   const disp = document.getElementById('display');
//   const ans=document.getElementById('ans')
//   var_1 = 0;
//   var_2 = 0;
//   var_global = '';
//   sym = '';
//   globalNum = 0;
//   answer = 0;
//   isDecimal = false;
//   disp.innerText = String(0);
//   ans.innerText="";
// };
// const display = (num) => {
//   const disp = document.getElementById('display');

//   const currVal = disp.innerText;
//   // console.log(currVal === '');

//   if (currVal === '0') {
//     disp.innerText = String(num);
//     var_global = String(num);
//   } else if (isAnswered && currVal.length-1>=0&&currVal.length-1<=9) {
//     var_1=0;
//     var_2=0;
//     var_global += String(num);
//     disp.innerText += String(num)
//   }
//   else if(isAnswered){
//     var_1=answer;
//     disp.innerText +=String(num);
//     const ans = document.getElementById('ans');
//     ans.innerText = '';
//     var_global = String(num);
//     isAnswered=false;

//   }else {
//     var_global += String(num);
//     disp.innerText += String(num);
//   }
//   console.log(disp.innerText);
// };
// const bs = () => {
//   console.log('triggered');
//   const disp = document.getElementById('display');
//   const currVal = disp.innerText;
//   disp.innerText = currVal.slice(0, currVal.length - 1);
//   if (disp.innerText == '') {
//     disp.innerText = String(0);
//   }
// };
// const arith = (symbol) => {
//   var_global = '';
//   console.log(isAnswered);
//   console.log(sym)
//   const disp = document.getElementById('display');
//   if (isAnswered === true) {
//     disp.innerText = String(answer);
//   }
//   if (sym === '') {
//     isDecimal = false;
//     var_1 = Number(disp.innerText);
//     sym = symbol;
//     globalNum = 0;
//     disp.innerText += symbol;
//   }
// };
// const addDecimal = () => {
//   if (!isDecimal) {
//     isDecimal = true;
//     const disp = document.getElementById('display');
//     disp.innerText += '.';
//   }
// };
// const calculate = () => {
//   isDecimal = false;
//   var_2 = Number(var_global);
//   console.log(sym);

//   switch (sym) {
//     case '+':
//       answer = var_1 + var_2;
//       var_1 = answer;
//       console.log(var_1, var_2);
//       break;
//     case '-':
//       answer = var_1 + var_2;
//       var_1 = answer;
//       break;
//     case '/':
//       answer = var_1 / var_2;
//       var_1 = answer;
//       break;
//     case '*':
//       answer = var_1 * var_2;
//       var_1 = answer;
//       break;
//     default:
//       break;
//   }

//   const ans = document.getElementById('ans');
//   ans.innerText = String(answer);
//   sym = '';
//   isAnswered = true;
// };
var var_1 = 0;
var var_2 = 0;
var answer = 0;
var symPressed = false;
var globalVar = 0;
var currSymbol = "";
var answered = false; //this variable is to tell if answer is calculated or not when number is pressed
const display = (num) => {
  const dScreen = document.getElementById("ans");
  const uScreen = document.getElementById("display");
  if (answered) {
    console.log("answered", answered);
    dScreen.innerText = "0";
    answered = false;
  }
  console.log(symPressed);
  if (dScreen.innerText === "0" || symPressed) {
    //when first time it is blank
    dScreen.innerText = String(num);
    // globalVar = Number(dScreen.innerText);
    symPressed = false; //this symPressed is done to
  } else {
    //if symbol is not added
    dScreen.innerText += String(num);
    // globalVar = Number(dScreen.innerText);
  }
};
const clearDisplay = () => {
  const dScreen = document.getElementById("ans");
  const uScreen = document.getElementById("display");
  uScreen.innerText = "";
  dScreen.innerText = "0";
  var_1 = 0;
  var_2 = 0;
  answer = 0;
  symPressed = false;
  currSymbol = "";
};
const arith = (symbol) => {
  const uScreen = document.getElementById("display");
  const dScreen = document.getElementById("ans");
  if (
    uScreen.innerText.length - 1 === "+" ||
    uScreen.innerText.length - 1 === "/" ||
    uScreen.innerText.length - 1 === "-" ||
    uScreen.innerText.length - 1 === "*"
  ) {
    return;
  }
  if (symPressed) {
    console.log("symPressed", symPressed);
    currSymbol = symbol;
    var_1 = answer;
    calculate();
    return;
  }
  var_1 = Number(dScreen.innerText);
  uScreen.innerText = dScreen.innerText + symbol;
  symPressed = true;
  currSymbol = symbol;
};

const calculate = () => {
  answered = true;
  symPressed = true;
  switchStatement(currSymbol);
};

const switchStatement = (currSymbol) => {
  const uScreen = document.getElementById("display");
  const dScreen = document.getElementById("ans");
  console.log(answer, var_1, var_1 + Number(dScreen.innerText));
  console.log(currSymbol);
  switch (currSymbol) {
    case "+":
      answer = var_1 + Number(dScreen.innerText);
      console.log(currSymbol);
      dScreen.innerText = answer;
      uScreen.innerText = "";
      break;
    case "-":
      answer = var_1 - Number(dScreen.innerText);
      console.log(currSymbol);
      dScreen.innerText = answer;
      uScreen.innerText = "";
      break;
    case "/":
      answer = var_1 / Number(dScreen.innerText);
      console.log(currSymbol);
      dScreen.innerText = answer;
      uScreen.innerText = "";
      break;
    case "*":
      answer = var_1 * Number(dScreen.innerText);
      console.log(currSymbol);
      dScreen.innerText = answer;
      uScreen.innerText = "";
      break;
    default:
      break;
  }
};

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
