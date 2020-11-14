let salaries = { John: 100, Ann: 160, Pete: 130 };
let numberArr = [];

for (var key in salaries) {
  numberArr.push(salaries[key]);
}

let sum = null;
for (let i = 0; i < numberArr.length; i++) {
  sum += numberArr[i];
}

console.log(sum);
