// ПРИ ВВЕДЕНИЕ НЕСКОЛЬКИХ ОПЕРАЦИЙ, НЕ ОТРАБАТЫВАЕТ СЛОЖНЫЕ ВЫЧИЛСЕНИЯ

// const calc = document.querySelector(".calc");
const calcParam = document.querySelector(".calc-param");
let calcInp = document.getElementById("calc-inp");

calcInp.value = 0;
let lastValue;

function insert(value) {
  calcInp.value += value;
}

function result() {
  calcInp.value = eval(calcInp.value);
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
    const splits = calcInp.value.split("");
    const manipulation = (elem) =>
      elem === "+" || elem === "-" || elem === "*" || elem === "/";
    const splitsSearchManip = splits.some(manipulation);
    const splitsSearchIndexManip = splits.findIndex(manipulation);
    const splitsSearchValueManip = splits.find(manipulation);
    const lastValueIsNumber = Number.isInteger(+calcInp.value.slice(-1));
    const splitsSearchPoint = splits.some((elem) => elem === ".");
    const value = calcInp.value.slice(0, -1);
    const symbol = calcInp.value.slice(-1);
    const firstValueAndManip = splits
      .slice(0, splitsSearchIndexManip + 1)
      .join("");
    const secondValue = splits
      .slice(splitsSearchIndexManip + 1, splits.length)
      .join("");

    console.log(calcInp.value.slice(-1));

    switch (buttonType) {
      case "plus":
        if (lastValueIsNumber) {
          result();
          insert(`+`);
        } else {
          calcInp.value = `${value}+`;
        }
        break;
      case "minus":
        if (lastValueIsNumber) {
          result();
          insert(`-`);
        } else {
          calcInp.value = `${value}-`;
        }
        break;
      case "virgule":
        if (lastValueIsNumber && !splitsSearchPoint) {
          insert(`.`);
        } else {
          if (!splitsSearchPoint) {
            insert(`0.`);
          }
        }
        break;
      case "plusMinus":
        if (lastValueIsNumber || lastValue === ".") {
          if (splitsSearchIndexManip > 0) {
            calcInp.value = `${firstValueAndManip}` + eval(secondValue * -1);
          } else {
            calcInp.value = eval(calcInp.value * -1);
            console.log(`secondValue`);
          }
        } else {
          console.log("ТЕСТ");
          valueRevers = eval(value * -1);
          calcInp.value = `${firstValueAndManip} ${valueRevers}`;
        }

        // if (lastValueIsNumber || lastValue === ".") {
        //   if (splitsSearchIndexManip >= 0) {
        //     if (splitsSearchIndexManip === 0) {
        //       alert("Введены неверные данные");
        //     } else {
        //       calcInp.value =
        //         `${firstValueAndManip}` + Math.sqrt(eval(secondValue));
        //     }
        //   } else {
        //     calcInp.value = Math.sqrt(eval(calcInp.value));
        //   }
        // } else {
        //   calcInp.value = `${value} ${symbol}` + Math.sqrt(value);
        // }

        break;
      case "multiply":
        if (lastValueIsNumber) {
          result();
          insert(`*`);
        } else {
          calcInp.value = `${value}*`;
        }
        break;
      case "divide":
        if (lastValueIsNumber) {
          result();
          insert(`/`);
        } else {
          calcInp.value = `${value}/`;
        }
        break;
      case "radical":
        if (lastValueIsNumber || lastValue === ".") {
          if (splitsSearchIndexManip >= 0) {
            if (splitsSearchIndexManip === 0) {
              alert("Введены неверные данные");
            } else {
              calcInp.value =
                `${firstValueAndManip}` + Math.sqrt(eval(secondValue));
            }
          } else {
            calcInp.value = Math.sqrt(eval(calcInp.value));
          }
        } else {
          calcInp.value = `${firstValueAndManip}` + Math.sqrt(value);
        }
        break;
      case "power":
        if (lastValueIsNumber) {
          calcInp.value = Math.pow(calcInp.value, 2);
        } else {
          valuePower = Math.pow(value, 2);

          calcInp.value = `${value} ${symbol} ${valuePower}`;
        }
        break;
      case "fraction":
        if (+calcInp.value !== 0) {
          if (lastValueIsNumber) {
            calcInp.value = 1 / calcInp.value;
          } else {
            valueFraction = 1 / value;
            calcInp.value = `${value} ${symbol} ${valueFraction}`;
          }
        } else {
          alert("Деление на ноль невозможно");
        }
        break;
      case "percent":
        break;

      case "Del":
        calcInp.value = value;
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
          calcInp.value = `${value} ${symbol} ${value}`;
          result();
        }
        break;
    }

    if (calcInp.value.length === 0) {
      calcInp.value = 0;
    }

    lastValue = calcInp.value.slice(-1);
  }
});
