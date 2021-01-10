// ПРИ ВВЕДЕНИЕ НЕСКОЛЬКИХ ОПЕРАЦИЙ, НЕ ОТРАБАТЫВАЕТ СЛОЖНЫЕ ВЫЧИЛСЕНИЯ

// const calc = document.querySelector(".calc");
const calcParam = document.querySelector(".calc-param");
let calcInp = document.getElementById("calc-inp");

// let firstNum;
// let secondNum;
calcInp.value = 0;

function insert(value) {
  calcInp.value += value;
}

function result() {
  calcInp.value = eval(calcInp.value);
}

// let aa = calcParam.children[8].textContent;
// console.log(Number.isInteger(+aa));

calcParam.addEventListener("click", (e) => {
  const buttonType = e.target.dataset.type;
  const buttonTypeNumber = e.target.textContent;

  if (buttonType) {
    const splits = calcInp.value.split("");
    const manipulation = (elem) =>
      elem === "+" || elem === "-" || elem === "*" || elem === "/";
    let splitsSearchManip = splits.some(manipulation);

    switch (buttonType) {
      case "plus":
        if (Number.isInteger(+calcInp.value.slice(-1))) {
          result();
          insert(`+`);
        } else {
          value = calcInp.value.slice(0, -1);
          calcInp.value = `${value}+`;
        }
        break;
      case "minus":
        if (Number.isInteger(+calcInp.value.slice(-1))) {
          result();
          insert(`-`);
        } else {
          value = calcInp.value.slice(0, -1);
          calcInp.value = `${value}-`;
        }
        break;
      case "virgule":
        if (
          Number.isInteger(+calcInp.value.slice(-1)) &&
          !splits.some((elem) => elem === ".")
        ) {
          insert(`.`);
        } else {
          splitsSearchPoint = splits.some((elem) => elem === ".");
          if (!splitsSearchPoint) {
            insert(`0.`);
          }
        }
        break;
      case "plusMinus":
        if (Number.isInteger(+calcInp.value.slice(-1))) {
          calcInp.value = eval(calcInp.value * -1);
        } else {
          symbol = calcInp.value.slice(-1);
          value = calcInp.value.slice(0, -1);
          valueRevers = eval(calcInp.value.slice(0, -1) * -1);
          calcInp.value = `${value} ${symbol} ${valueRevers}`;
        }
        break;
      case "multiply":
        if (Number.isInteger(+calcInp.value.slice(-1))) {
          result();
          insert(`*`);
        } else {
          value = calcInp.value.slice(0, -1);
          calcInp.value = `${value}*`;
        }
        break;
      case "divide":
        if (Number.isInteger(+calcInp.value.slice(-1))) {
          result();
          insert(`/`);
        } else {
          value = calcInp.value.slice(0, -1);
          calcInp.value = `${value}/`;
        }
        break;
      case "radical":
        let begValue = "";
        let finValue = "";
        begValue = calcInp.value.split("");
        calcInp.value = "";
        finValue = Math.sqrt(begValue[begValue.length - 1]);
        begValue.splice(begValue.length - 1, 1, `${finValue}`);
        begValue = begValue.join("");
        calcInp.value = begValue;

        // if (Number.isInteger(+calcInp.value.slice(-1))) {
        //   if (!splitsSearchManip) {
        //     calcInp.value = Math.sqrt(eval(calcInp.value));
        //   } else {
        //     console.log(123);
        //   }
        // } else {
        //   symbol = calcInp.value.slice(-1);
        //   value = calcInp.value.slice(0, -1);
        //   valueRadical = Math.sqrt(calcInp.value.slice(0, -1));
        //   calcInp.value = `${value} ${symbol} ${valueRadical}`;
        // }

        // for (i = 1; i < calcInp.value.length; i++) {
        //   if (!Number.isInteger(+calcInp.value[i])) {
        //     value = calcInp.value[i + 1];
        //     console.log(calcInp.value[i + 1]);
        //     console.log(calcInp.value[i + 2]);
        //   }
        // }

        break;
      case "power":
        if (Number.isInteger(+calcInp.value.slice(-1))) {
          calcInp.value = Math.pow(calcInp.value, 2);
        } else {
          symbol = calcInp.value.slice(-1);
          value = calcInp.value.slice(0, -1);
          valuePower = Math.pow(calcInp.value.slice(0, -1), 2);

          calcInp.value = `${value} ${symbol} ${valuePower}`;
        }
        break;
      case "fraction":
        if (+calcInp.value !== 0) {
          if (Number.isInteger(+calcInp.value.slice(-1))) {
            calcInp.value = 1 / calcInp.value;
          } else {
            symbol = calcInp.value.slice(-1);
            value = calcInp.value.slice(0, -1);
            valueFraction = 1 / calcInp.value.slice(0, -1);
            calcInp.value = `${value} ${symbol} ${valueFraction}`;
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
        if (Number.isInteger(+calcInp.value.slice(-1))) {
          result();
        } else {
          symbol = calcInp.value.slice(-1);
          value = calcInp.value.slice(0, -1);
          calcInp.value = `${value} ${symbol} ${value}`;
          result();
        }
        break;
    }

    if (Number.isInteger(+buttonTypeNumber)) {
      if (+calcInp.value === 0 && calcInp.value.length === 1) {
        calcInp.value = "";
      }
      insert(+buttonTypeNumber);
    }

    if (calcInp.value.length === 0) {
      calcInp.value = 0;
    }
  }
});
