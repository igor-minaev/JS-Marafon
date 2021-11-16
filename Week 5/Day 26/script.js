/* function ucFirst(str) {
  console.log(str = str[0].toUpperCase() + str.slice(1)); 
}

ucFirst('игорь'); */

/* function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

alert(checkSpam("buy ViAgRA now"));
 */


/* function truncate(str, maxlength) {
  console.log((str.length > maxlength) ? str.slice(0, maxlength) + "…" : str); 
};

truncate('Привет Винни Пух', 20); */


function extractCurrencyValue(str) {
  console.log(+str.slice(1)); 
}

extractCurrencyValue('$500');
