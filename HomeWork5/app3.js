const arrNumber = [];

for (i = 0; i < 10; i++) {
  arrNumber.push(Math.round(Math.random() * 100));
}

for (i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] === 0) {
    arrNumber.splice(i, 1, "zero");
  }

  if (arrNumber[i] === 100) {
    arrNumber.splice(i, 1, arrNumber[i] / 100 + "zerozero");
  }

  if (arrNumber[i] % 10 === 0) {
    arrNumber.splice(i, 1, arrNumber[i] / 10 + "zero");
  }
}

console.log(arrNumber);
