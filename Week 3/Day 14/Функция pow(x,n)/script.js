function pow(x,n){
  return x**n;
}

let x = prompt('Введите х:', '');
let n = prompt('Введите n:', '');

if (n < 1) {
  alert('Значение не поддерживается');
} else {
  alert(pow(x,n));
}