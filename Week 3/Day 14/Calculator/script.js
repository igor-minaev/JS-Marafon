let a = +prompt('a:','');
let b = +prompt('b','');
let operation = prompt('Оператор:', 'sum - "+",diff - "-", multi - "*", divi - "/", rem - "%", exp - "**"');

function Calc(operation,a,b) {
  if (operation == undefined || a == undefined || b == undefined || isNaN(a) || isNaN(b)) {
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
