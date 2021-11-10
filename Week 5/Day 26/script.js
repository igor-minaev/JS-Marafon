function showVerticalMessage(str) {
  if (str[0] === "м") {
    str = str[0].toUpperCase() + str.slice(1);
  }

  if (str.length > 10) {
    str = str.substr(0, 10);
  }

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

showVerticalMessage("марафон");
console.log("-------- ");
showVerticalMessage("конкатенация");
console.log("-------- ");
showVerticalMessage("математика");
