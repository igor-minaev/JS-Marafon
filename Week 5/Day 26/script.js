function showVerticalMessage(str) {
  if (str.startsWith("м")) {
    str = str[0].toUpperCase() + str.slice(1);
  }

  for (let char of str.slice(0, 10)) {
    console.log(char);
  }
}

showVerticalMessage("марафон");
console.log("-------- ");
showVerticalMessage("конкатенация");
console.log("-------- ");
showVerticalMessage("математика");
