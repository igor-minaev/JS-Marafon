
// Version 1
function Calc(operation,a,b) {
  const isNotValid = (!operation || !a || !b || typeof a !== 'number' || typeof b !== 'number' );

  if (isNotValid ) {
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


//Version 2
/* function Calc(operation,a,b) {
  function isNotValidOperator(operator) {
    return (!(operator) || typeof operator !== 'number');
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
console.log(Calc('diff','r','')); */