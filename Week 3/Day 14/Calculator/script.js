//Version 1
let a = +prompt('a:','');
let b = +prompt('b','');
let operation = prompt('Оператор:', 'sum - "+",diff - "-", multi - "*", divi - "/", rem - "%", exp - "**"');

function Calc(operation,a,b) {
  if (!operation || !a || !b ) {
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

let result = Calc(operation,a,b);
alert(result);


// Version 2
/* function Calc(operation,a,b) {
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
console.log(Calc('diff','r','')); */