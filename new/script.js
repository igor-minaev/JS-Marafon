function Calc(operation,a,b) {
  if (!operation || !a || !b || typeof a != 'number' || typeof b != 'number' ) {
    return 'Error';
  }  else if (operation == 'sum') {
    return a + b;
  } else if (operation == 'diff') {
    return a - b;
  } else if (operation == 'multi') {
    return a * b;
  } else if (operation == 'divi') {
    return a / b;
  } else if (operation == 'rem') {
    return a % b;
  } else if (operation == 'exp') {
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