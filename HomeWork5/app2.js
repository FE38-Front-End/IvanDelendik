const arrayNumber = [];

for (i = 0; i < 7; i++) {
  const randomNumber = Math.round(Math.random() * 10);

  if (arrayNumber.indexOf(randomNumber) >= 0) {
    i--;
  } else {
    arrayNumber.push(randomNumber);
  }
}
console.log(arrayNumber);

function sortNumbers(n1, n2) {
  return n1 - n2;
}

arrayNumber.sort(sortNumbers);
console.log(arrayNumber);
