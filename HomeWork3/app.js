const salaries = { John: 100, Ann: 160, Pete: 130 };
let numberSum = 0;

for (var key in salaries) {
  numberSum += salaries[key];
}

console.log(numberSum);
