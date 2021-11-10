//С использованием object

function Calc(operation, a, b) {
  const isNotValid =
    !operation || typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b);

  const isNotPossibleDivide =
    b === 0 && (operation === "divi" || operation === "rem");

  const operations = {
    "sum": a + b,
    "diff": a - b,
    "multi": a * b,
    "divi": a / b,
    "rem": a % b,
    "exp": a ** b
  }    
  
  if (isNotValid) {
    return "Error";
  } else if (isNotPossibleDivide){
    return "Error. You can't divide by zero";
  } else if (operation in operations) {
    return operations[operation];
  } else {
    return "unknown operation";
  }
}
  


console.log(Calc("diff", 1, 3));
console.log(Calc("diff", true, 3));
console.log(Calc("diff", "r", 3));
console.log(Calc(1, 2, 3));
console.log(Calc("diff", "r", ""));
console.log(Calc("divi", 0, 2));
console.log(Calc("divi", 5, 0)); 
console.log(Calc("divi", 5,)); 
console.log(Calc("divi", 5, NaN)); 


//Version 1
/* function Calc(operation, a, b) {
  const isNotValid =
    !operation ||
    a == "undefined" ||
    b == "undefined" ||
    typeof a !== "number" ||
    typeof b !== "number";

  if (isNotValid) {
    return "Error";
  }

  switch (operation) {
    case "sum":
      return a + b;

    case "diff":
      return a - b;

    case "multi":
      return a * b;

    case "divi":
      if (b === 0) {
        return "Error. You can't divide by zero";
      } else {
        return a / b;
      }

    case "rem":
      if (b === 0) {
        return "Error. You can't divide by zero";
      } else {
        return a % b;
      }

    case "exp":
      return a ** b;

    default:
      return "unknown operation";
  }
}

console.log(Calc("diff", 1, 3));
console.log(Calc("diff", true, 3));
console.log(Calc("diff", "r", 3));
console.log(Calc(1, 2, 3));
console.log(Calc("diff", "r", ""));
console.log(Calc("divi", 0, 2));
console.log(Calc("divi", 5, 0)); */

//Version 2
/* function Calc(operation,a,b) {
  function isNotValidOperator(operator) {
    return (operator == 'undefined' || typeof operator !== 'number');
  }
  if (!operation || isNotValidOperator(a) || isNotValidOperator(b) ) {
    return 'Error';
  }  else if (operation === 'sum') {
    return a + b;
  } else if (operation === 'diff') {
    return a - b;
  } else if (operation === 'multi') {
    return a * b;
  } else if (operation === 'divi') {
    return a / b;
  } else if (operation === 'rem') {
    return a % b;
  } else if (operation === 'exp') {
    return a ** b;
  } else {
    return 'unknown operation';
  }
}


console.log(Calc('diff',1,3));
console.log(Calc('diff',true,3));
console.log(Calc('diff','r',3));
console.log(Calc(1,2,3));
console.log(Calc('diff','r',''));
console.log(Calc('divi',0,2));
console.log(Calc('divi',5,0)); */
