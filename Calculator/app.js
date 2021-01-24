// ПРИ ВВЕДЕНИЕ НЕСКОЛЬКИХ ОПЕРАЦИЙ, НЕ ОТРАБАТЫВАЕТ СЛОЖНЫЕ ВЫЧИЛСЕНИЯ
//Сделать одинаковы отступы между 20--20

// const calc = document.querySelector(".calc");
const calcParam = document.querySelector(".calc-param");
let calcInp = document.getElementById("calc-inp");

calcInp.value = 0;
let firstNumber;
let secondNumber;

function insert(value) {
  calcInp.value += value;
}

// function result() {
//   calcInp.value = eval(calcInp.value);
// }

calcParam.addEventListener("click", (e) => {
  const buttonType = e.target.dataset.type;
  const buttonTypeNumber = e.target.textContent;

  if (Number.isInteger(+buttonTypeNumber)) {
    if (+calcInp.value === 0 && calcInp.value.length === 1) {
      calcInp.value = "";
    }
    insert(+buttonTypeNumber);
  }

  if (buttonType) {
    const splitsBeforeManip = calcInp.value.split("");
    const manipulation = (elem) =>
      elem === "+" || elem === "-" || elem === "*" || elem === "/";
    const splitsSearchIndexManip = splitsBeforeManip
      .slice(1)
      .findIndex(manipulation);
    const lastValueIsNumber = Number.isInteger(+calcInp.value.slice(-1));
    const splitsSearchPoint = splitsBeforeManip.some((elem) => elem === ".");

    const symbol = calcInp.value.slice(-1);
    const firstValueAndManip = splitsBeforeManip
      .slice(0, splitsSearchIndexManip + 2)
      .join("");
    const secondValue = splitsBeforeManip
      .slice(splitsSearchIndexManip + 2, splitsBeforeManip.length)
      .join("");

    switch (buttonType) {
      case "plus":
        if (lastValueIsNumber) {
          if (!!secondNumber) {
            calcInp.value = (10 * firstNumber + 10 * secondNumber) / 10;
            insert(`+`);
          } else {
            insert(`+`);
          }
        } else {
          calcInp.value = `${firstNumber}+`;
        }
        break;
      case "minus":
        if (lastValueIsNumber) {
          result();
          insert(`-`);
        } else {
          calcInp.value = `${firstNumber}-`;
        }
        break;
      case "virgule":
        if (lastValueIsNumber) {
          insert(`.`);
        } else {
          if (!splitsSearchPoint) {
            insert(`0.`);
          }
        }
        break;
      case "plusMinus":
        if (lastValueIsNumber || lastValue === ".") {
          if (splitsSearchIndexManip >= 0) {
            calcInp.value = `${firstValueAndManip} ` + eval(secondValue * -1);
          } else {
            calcInp.value = eval(calcInp.value * -1);
          }
        } else {
          valueRevers = eval(firstNumber * -1);
          calcInp.value = `${firstNumber} ${symbol} ${valueRevers}`;
        }

        break;
      case "multiply":
        if (lastValueIsNumber) {
          result();
          insert(`*`);
        } else {
          calcInp.value = `${firstNumber}*`;
        }
        break;
      case "divide":
        if (lastValueIsNumber) {
          result();
          insert(`/`);
        } else {
          calcInp.value = `${firstNumber}/`;
        }
        break;
      case "radical":
        if (lastValueIsNumber || lastValue === ".") {
          if (splitsSearchIndexManip >= 0) {
            calcInp.value =
              `${firstValueAndManip}` + Math.sqrt(eval(secondValue));
          } else {
            if (calcInp.value < 0) {
              alert("Введены неверные данные");
            } else {
              calcInp.value = Math.sqrt(eval(calcInp.value));
            }
          }
        } else {
          if (Math.sqrt(firstNumber) >= 0) {
            calcInp.value = `${firstValueAndManip}` + Math.sqrt(firstNumber);
          } else {
            alert("Введены неверные данные");
          }
        }
        break;
      case "power":
        if (lastValueIsNumber) {
          calcInp.value = Math.pow(calcInp.value, 2);
        } else {
          valuePower = Math.pow(firstNumber, 2);

          calcInp.value = `${firstNumber} ${symbol} ${valuePower}`;
        }
        break;
      case "fraction":
        if (+calcInp.value !== 0) {
          if (lastValueIsNumber) {
            calcInp.value = 1 / calcInp.value;
          } else {
            valueFraction = 1 / firstNumber;
            calcInp.value = `${firstNumber} ${symbol} ${valueFraction}`;
          }
        } else {
          alert("Деление на ноль невозможно");
        }
        break;
      case "percent":
        break;

      case "Del":
        calcInp.value = calcInp.value.slice(0, -1);
        break;
      case "C":
        calcInp.value = 0;
        break;
      case "CE":
        break;

      case "MC":
        break;
      case "MR":
        break;
      case "MPlus":
        break;
      case "MMinus":
        break;
      case "MS":
        break;

      case "equalle":
        if (lastValueIsNumber) {
          result();
        } else {
          calcInp.value = `${firstNumber} ${symbol} ${firstNumber}`;
          result();
        }
        break;
    }

    if (calcInp.value.length === 0) {
      calcInp.value = 0;
    }

    // const lastValue = calcInp.value.slice(-1);

    const splitsAfterManip = calcInp.value.split("");
    const splitsSearchManip = splitsAfterManip.some(manipulation);
    const splitsSearchIndexManipAfter =
      splitsAfterManip.slice(1).findIndex(manipulation) + 1;

    if (splitsSearchManip) {
      firstNumber = +splitsAfterManip
        .slice(0, splitsSearchIndexManipAfter)
        .join("");

      const manip = splitsAfterManip.find(manipulation);

      secondNumber = +splitsAfterManip
        .slice(splitsSearchIndexManipAfter + 1, splitsAfterManip.length)
        .join("");

      //Приведене десятичных чисел до целого
      const indexPointInFirstNumber = +Array.from(`${firstNumber}`).findIndex(
        (elem) => elem === "."
      );
      const indexPointInSecondNumber = +Array.from(`${secondNumber}`).findIndex(
        (elem) => elem === "."
      );

      const lengthFirstNumber = +Array.from(`${firstNumber}`).length;
      const lengthSecondNumber = +Array.from(`${secondNumber}`).length;

      const reductionToWholeFirstNumber =
        lengthFirstNumber - indexPointInFirstNumber - 1;
      const reductionToWholeSecondNumber =
        lengthSecondNumber - indexPointInSecondNumber - 1;

      console.log("Индекс точки в первом числе " + indexPointInFirstNumber);
      console.log("Длина первого числа " + lengthFirstNumber);
      console.log("Индекс точки во втором числе " + indexPointInSecondNumber);
      console.log("Длина второго числа " + lengthSecondNumber);

      console.log(reductionToWholeFirstNumber);
      console.log(reductionToWholeSecondNumber);
    } else {
      firstNumber = +calcInp.value;
    }
  }
});
