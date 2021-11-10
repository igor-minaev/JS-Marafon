/* let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name; */

/* let user = {};

function isEmpty(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(user));

user.name = 'Holly';

console.log(isEmpty(user)); */

/* const user = {
  name: "John",
};

user.name = "Pete";  // Да, можно изменить */

/* 
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  console.log(sum);
 */

/* let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};


function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
};

multiplyNumeric(menu);

console.log(menu); */
