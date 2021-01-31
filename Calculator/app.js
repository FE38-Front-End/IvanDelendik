const calc = document.querySelector(".calc");
let calcInp = document.getElementById("calc-inp");
let inputMemory = document.getElementById("calc-memory");
const buttonMC = document.querySelector("button[data-type='MC']");
const buttonMR = document.querySelector("button[data-type='MR']");
const buttonMPlus = document.querySelector("button[data-type='MPlus']");
const buttonMMinus = document.querySelector("button[data-type='MMinus']");

let firstNumber = 0;
let firstNumberSlice = [];
calcInp.value = firstNumber;
let secondNumber = 0;
let secondNumberSlice = [];
let degree = 0;
let manip;
let numberReserve;
let MemoryIsNumber;
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

function replaceMinusMinusWithPlus() {
  if (calcInp.value.indexOf("--") + 1) {
    input = calcInp.value.split("");
    searchIndexMinusMinus =
      +input.slice(1).findIndex((elem) => elem === "-") + 1;
    replace = input.splice(searchIndexMinusMinus, 2, "+");
    calcInp.value = input.join("");
  }
}

calc.addEventListener("click", (e) => {
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
    const splitsSearchIndexBeforeManip = splitsBeforeManip
      .slice(1)
      .findIndex(manipulation);
    let lastValueIsNumber = Number.isInteger(+calcInp.value.slice(-1));
    let lastValueIsPoint = Boolean(calcInp.value.slice(-1) === ".");
    searchPointInSecondNumber = secondNumberSlice.some((elem) => elem === ".");
    const firstValueAndManip = splitsBeforeManip
      .slice(0, splitsSearchIndexBeforeManip + 2)
      .join("");

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
          calcInp.value = `${+firstNumber}+`;
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
          calcInp.value = `${+firstNumber}-`;
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
          calcInp.value = `${+firstNumber}*`;
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
          calcInp.value = `${+firstNumber}/`;
        }
        break;
      case "radical":
        if (lastValueIsNumber || lastValueIsPoint) {
          if (splitsSearchIndexBeforeManip >= 0) {
            calcInp.value = `${firstValueAndManip}` + Math.sqrt(secondNumber);
          } else {
            if (calcInp.value < 0) {
              alert("Введены неверные данные");
            } else {
              calcInp.value = Math.sqrt(calcInp.value);
            }
          }
        } else {
          if (firstNumber >= 0) {
            calcInp.value = `${firstValueAndManip}` + Math.sqrt(firstNumber);
          } else {
            alert("Введены неверные данные");
          }
        }
        break;
      case "power":
        if (lastValueIsNumber || lastValueIsPoint) {
          if (splitsSearchIndexBeforeManip >= 0) {
            calcInp.value = `${firstValueAndManip}` + Math.pow(secondNumber, 2);
          } else {
            calcInp.value = Math.pow(calcInp.value, 2);
          }
        } else {
          valuePower = Math.pow(firstNumber, 2);
          calcInp.value = `${firstValueAndManip}${valuePower}`;
        }
        break;
      case "fraction":
        if (+calcInp.value !== 0) {
          if (lastValueIsNumber || lastValueIsPoint) {
            if (splitsSearchIndexBeforeManip >= 0) {
              calcInp.value = `${firstValueAndManip}` + 1 / secondNumber;
            } else {
              calcInp.value = 1 / calcInp.value;
            }
          } else {
            valueFraction = 1 / firstNumber;
            calcInp.value = `${firstValueAndManip}${valueFraction}`;
          }
        } else {
          alert("Деление на ноль невозможно");
        }
        break;
      case "percent":
        if (lastValueIsNumber || lastValueIsPoint) {
          if (splitsSearchIndexBeforeManip >= 0) {
            calcInp.value =
              `${firstValueAndManip}` + (firstNumber * secondNumber) / 100;
            replaceMinusMinusWithPlus();
          } else {
            calcInp.value = 0;
          }
        } else {
          calcInp.value =
            `${firstValueAndManip}` + (firstNumber * firstNumber) / 100;
        }
        break;

      case "Del":
        calcInp.value = calcInp.value.slice(0, -1);
        break;
      case "C":
        firstNumber = 0;
        secondNumber = 0;
        manip = null;
        calcInp.value = firstNumber;
        break;
      case "CE":
        if (!!secondNumber) {
          calcInp.value = `${firstValueAndManip}`;
        } else {
          if ((lastValueIsPoint || lastValueIsNumber) && !manip) {
            calcInp.value = 0;
          } else {
            calcInp.value = `${firstValueAndManip}`;
          }
        }
        break;
      case "MC":
        inputMemory.value = "В памяти ничего не сохранено";
        buttonMC.disabled = true;
        buttonMR.disabled = true;
        break;
      case "MR":
        if (lastValueIsNumber) {
          if (!secondNumber) {
            calcInp.value = inputMemory.value;
          } else {
            calcInp.value = `${firstValueAndManip}` + inputMemory.value;
          }
        } else {
          calcInp.value = `${firstValueAndManip}` + inputMemory.value;
        }
        break;
      case "MPlus":
        if (lastValueIsNumber) {
          if (!secondNumber) {
            if (MemoryIsNumber) {
              inputMemory.value = +inputMemory.value + +firstNumber;
            } else {
              inputMemory.value = firstNumber;
            }
          } else {
            if (MemoryIsNumber) {
              inputMemory.value = +inputMemory.value + +secondNumber;
            } else {
              inputMemory.value = secondNumber;
            }
          }
        } else {
          if (MemoryIsNumber) {
            inputMemory.value = +inputMemory.value + +firstNumber;
          } else {
            inputMemory.value = firstNumber;
          }
        }
        break;
      case "MMinus":
        if (lastValueIsNumber) {
          if (!secondNumber) {
            if (MemoryIsNumber) {
              inputMemory.value = +firstNumber - +inputMemory.value;
            } else {
              inputMemory.value = firstNumber * -1;
            }
          } else {
            if (MemoryIsNumber) {
              inputMemory.value = +secondNumber - +inputMemory.value;
            } else {
              inputMemory.value = secondNumber * -1;
            }
          }
        } else {
          if (MemoryIsNumber) {
            inputMemory.value = +firstNumber - +inputMemory.value;
          } else {
            inputMemory.value = firstNumber * -1;
          }
        }
        break;
      case "MS":
        if (lastValueIsNumber) {
          if (!secondNumber) {
            inputMemory.value = firstNumber;
          } else {
            inputMemory.value = secondNumber;
          }
        } else {
          inputMemory.value = firstNumber;
        }
        break;

      case "equalle":
        if (lastValueIsNumber) {
          if (manip) {
            numberReserve = secondNumber;
            manipReserve = manip;
            calcInp.value = operations[manip](
              firstNumber,
              numberReserve,
              degree
            );
            secondNumber = 0;
            manip = null;
          } else {
            if (!!numberReserve) {
              calcInp.value = operations[manipReserve](
                firstNumber,
                numberReserve,
                degree
              );
            }
          }
        } else {
          numberReserve = firstNumber;
          manipReserve = manip;
          manip = null;
          calcInp.value = operations[manipReserve](
            firstNumber,
            numberReserve,
            degree
          );
        }
        break;
    }

    if (calcInp.value.length === 0) {
      calcInp.value = 0;
    }
  }

  const splitsAfterManip = calcInp.value.split("");
  const splitsSearchManip = splitsAfterManip.slice(1).some(manipulation);
  const splitsSearchIndexManipAfter =
    splitsAfterManip.slice(1).findIndex(manipulation) + 1;

  if (splitsSearchManip) {
    firstNumberSlice = splitsAfterManip.slice(0, splitsSearchIndexManipAfter);
    firstNumber = +firstNumberSlice.join("");
    searchPointInfirstNumber = firstNumberSlice.some((elem) => elem === ".");
    manip = splitsAfterManip.slice(1).find(manipulation);
    secondNumberSlice = splitsAfterManip.slice(
      splitsSearchIndexManipAfter + 1,
      splitsAfterManip.length
    );
    secondNumber = +secondNumberSlice.join("");
    searchPointInSecondNumber = secondNumberSlice.some((elem) => elem === ".");

    //Приведение десятичных чисел до целого
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
  } else {
    firstNumber = calcInp.value;
    firstNumberSlice = splitsAfterManip.slice(0, calcInp.value.length);
    searchPointInfirstNumber = firstNumberSlice.some((elem) => elem === ".");
  }

  MemoryIsNumber = Number.isInteger(+inputMemory.value);
  if (MemoryIsNumber) {
    buttonMC.disabled = false;
    buttonMR.disabled = false;
  }
});
