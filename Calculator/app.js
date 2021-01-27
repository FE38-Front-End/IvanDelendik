// ПРИ ВВЕДЕНИЕ НЕСКОЛЬКИХ ОПЕРАЦИЙ, НЕ ОТРАБАТЫВАЕТ СЛОЖНЫЕ ВЫЧИЛСЕНИЯ
//Сделать одинаковы отступы между 20--20

// const calc = document.querySelector(".calc");
const calcParam = document.querySelector(".calc-param");
let calcInp = document.getElementById("calc-inp");

let firstNumber = 0;
let firstNumberSlice = [];
// let firstValueAndManip;
calcInp.value = firstNumber;
let secondNumber = 0;
let secondNumberSlice = [];
let degree;
let manip;

let searchPointInfirstNumber = firstNumberSlice.some((elem) => elem === ".");

function insert(value) {
  calcInp.value += value;
}

let operations = {
  "+": (a, b, c) => (a * 10 ** c + b * 10 ** c) / 10 ** c,
  "-": (a, b, c) => (a * 10 ** c - b * 10 ** c) / 10 ** c,
  "/": (a, b, c) => (a * 10 ** c) / (b * 10 ** c),
  "*": (a, b, c) => (a * 10 ** c * (b * 10 ** c)) / (10 ** c) ** 2,
};

const manipulation = (elem) =>
  elem === "+" || elem === "-" || elem === "*" || elem === "/";

function result() {
  calcInp.value = eval(calcInp.value);
}

function replaceMinusMinusWithPlus() {
  if (calcInp.value.indexOf("--") + 1) {
    input = calcInp.value.split("");
    searchIndexMinusMinus =
      +input.slice(1).findIndex((elem) => elem === "-") + 1;
    replace = input.splice(searchIndexMinusMinus, 2, "+");
    calcInp.value = input.join("");
  }
}

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
    const splitsSearchPoint = splitsBeforeManip.some((elem) => elem === ".");
    const splitsSearchIndexBeforeManip = splitsBeforeManip
      .slice(1)
      .findIndex(manipulation);

    let lastValueIsNumber = Number.isInteger(+calcInp.value.slice(-1));
    let lastValueIsPoint = Boolean(calcInp.value.slice(-1) === ".");
    const firstNumberWithoutPoint = calcInp.value.slice(0, -1);
    searchPointInSecondNumber = secondNumberSlice.some((elem) => elem === ".");
    // const symbol = calcInp.value.slice(-1);

    const firstValueAndManip = splitsBeforeManip
      .slice(0, splitsSearchIndexBeforeManip + 2)
      .join("");

    // const secondValue = splitsBeforeManip
    //   .slice(splitsSearchIndexBeforeManip + 2, splitsBeforeManip.length)
    //   .join("");

    switch (buttonType) {
      case "plus":
        if (lastValueIsNumber) {
          if (!!secondNumber) {
            calcInp.value = operations[manip](
              firstNumber,
              secondNumber,
              degree
            );
          }
          insert(`+`);
        } else {
          calcInp.value = `${firstNumber}+`;
        }
        break;
      case "minus":
        if (lastValueIsNumber) {
          if (!!secondNumber) {
            calcInp.value = operations[manip](
              firstNumber,
              secondNumber,
              degree
            );
          }
          insert(`-`);
        } else {
          if (lastValueIsPoint) {
            calcInp.value = `${firstNumberWithoutPoint}-`;
          } else {
            calcInp.value = `${firstNumber}-`;
          }
        }
        break;
      case "virgule":
        if (lastValueIsNumber || lastValueIsPoint) {
          if (!searchPointInfirstNumber && !manip) {
            insert(`.`);
          }
          if (!searchPointInSecondNumber && manip) {
            insert(`.`);
            searchPointInSecondNumber = true;
          }
        } else {
          insert(`0.`);
        }
        break;
      case "plusMinus":
        if (lastValueIsNumber || lastValueIsPoint) {
          if (splitsSearchIndexBeforeManip >= 0) {
            calcInp.value = `${firstValueAndManip}` + secondNumber * -1;
            replaceMinusMinusWithPlus();
          } else {
            calcInp.value = +calcInp.value * -1;
          }
        } else {
          valueRevers = firstNumber * -1;
          calcInp.value = `${firstValueAndManip}${valueRevers}`;
          replaceMinusMinusWithPlus();
        }

        break;
      case "multiply":
        if (lastValueIsNumber) {
          if (!!secondNumber) {
            calcInp.value = operations[manip](
              firstNumber,
              secondNumber,
              degree
            );
          }
          insert(`*`);
        } else {
          if (lastValueIsPoint) {
            calcInp.value = `${firstNumberWithoutPoint}*`;
          } else {
            calcInp.value = `${firstNumber}*`;
          }
        }
        break;
      case "divide":
        if (lastValueIsNumber) {
          if (!!secondNumber) {
            calcInp.value = operations[manip](
              firstNumber,
              secondNumber,
              degree
            );
          }
          insert(`/`);
        } else {
          if (lastValueIsPoint) {
            calcInp.value = `${firstNumberWithoutPoint}/`;
          } else {
            calcInp.value = `${firstNumber}/`;
          }
        }
        break;
      case "radical":
        if (lastValueIsNumber || lastValue === ".") {
          if (splitsSearchIndexBeforeManip >= 0) {
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
        firstNumber = 0;
        secondNumber = 0;
        calcInp.value = firstNumber;
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
  }

  const splitsAfterManip = calcInp.value.split("");

  const splitsSearchManip = splitsAfterManip.some(manipulation);
  const splitsSearchIndexManipAfter =
    splitsAfterManip.slice(1).findIndex(manipulation) + 1;

  if (splitsSearchManip) {
    firstNumberSlice = splitsAfterManip.slice(0, splitsSearchIndexManipAfter);

    firstNumber = +firstNumberSlice.join("");

    searchPointInfirstNumber = firstNumberSlice.some((elem) => elem === ".");

    manip = splitsAfterManip.find(manipulation);

    secondNumberSlice = splitsAfterManip.slice(
      splitsSearchIndexManipAfter + 1,
      splitsAfterManip.length
    );

    secondNumber = +secondNumberSlice.join("");

    searchPointInSecondNumber = secondNumberSlice.some((elem) => elem === ".");

    //Приведене десятичных чисел до целого
    const indexPointInFirstNumber = +firstNumberSlice.findIndex(
      (elem) => elem === "."
    );
    const indexPointInSecondNumber = +secondNumberSlice.findIndex(
      (elem) => elem === "."
    );

    const lengthFirstNumber = +firstNumberSlice.length;
    const lengthSecondNumber = +secondNumberSlice.length;

    const reductionToWholeFirstNumber =
      lengthFirstNumber - indexPointInFirstNumber - 1;
    const reductionToWholeSecondNumber =
      lengthSecondNumber - indexPointInSecondNumber - 1;
    degree = Math.max(
      reductionToWholeFirstNumber,
      reductionToWholeSecondNumber
    );
    // console.log("первое числе " + firstNumber);
    // console.log("второе число " + secondNumber);
    // console.log("Вычисление " + manip);

    // console.log(
    //   "Вычсление " + operations[manip](firstNumber, secondNumber, degree)
    // );
  } else {
    firstNumber = calcInp.value;
    firstNumberSlice = splitsAfterManip.slice(0, calcInp.value.length);
    searchPointInfirstNumber = firstNumberSlice.some((elem) => elem === ".");

    console.log(firstNumber);
    // console.log(firstNumberSlice);
    // console.log(firstNumber);
    // console.log(searchPointInfirstNumber);
  }
});
