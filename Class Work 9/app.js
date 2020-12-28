const square = document.getElementById("square");
const circle = document.getElementById("circle");
const buttonUp = document.getElementById("button-up");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const buttonDown = document.getElementById("button-down");
const buttonSaveSquare = document.getElementById("button-save-square");
const inputSaveSquare = document.getElementById("input-save-square");
const buttonSaveCircle = document.getElementById("button-save-circle");
const inputSaveCircle = document.getElementById("input-save-circle");
const buttonSaveStep = document.getElementById("button-save-step");
const inputSaveStep = document.getElementById("input-save-step");
const buttonsBlock = document.querySelector(".buttons");
const buttonsBlockSave = document.querySelector(".parametrs");

//Переменные отступ от верхненго края, от левого края и шаг
let topIndent;
let leftIndent;
let step;

inputSaveSquare.value = +localStorage.getItem("localSquare");
inputSaveCircle.value = +localStorage.getItem("localCircle");
inputSaveStep.value = +localStorage.getItem("localStep");
inputSaveSquare.value = +localStorage.getItem("localSquare");
square.style.width = localStorage.getItem("localSquareWidth");
square.style.height = localStorage.getItem("localSquareHeight");
square.style.display = localStorage.getItem("localSquareDisplay");
circle.style.width = localStorage.getItem("localCircleWidth");
circle.style.height = localStorage.getItem("localCircleHeight");
circle.style.display = localStorage.getItem("localCircleDisplay");
circle.style.top = localStorage.getItem("localCircleTop");
circle.style.left = localStorage.getItem("localCircleLeft");
topIndent = +localStorage.getItem("localTopIndent");
leftIndent = +localStorage.getItem("localLeftIndent");

//Проверка на заполнение всех вводных параметров
if (
  +inputSaveSquare.value !== 0 &&
  +inputSaveCircle.value !== 0 &&
  +inputSaveStep.value !== 0
) {
  buttonUp.disabled = false;
  buttonLeft.disabled = false;
  buttonRight.disabled = false;
  buttonDown.disabled = false;
} else {
  buttonUp.disabled = true;
  buttonLeft.disabled = true;
  buttonRight.disabled = true;
  buttonDown.disabled = true;
  buttonSaveCircle.disabled = true;
  buttonSaveStep.disabled = true;
}

//Кнопки сохранения вводных данных
buttonsBlockSave.addEventListener("click", (e) => {
  const buttonTypeSave = e.target.dataset.type;
  if (buttonTypeSave) {
    if (+inputSaveCircle.value <= +inputSaveSquare.value) {
      topIndent = +(inputSaveSquare.value / 2 - inputSaveCircle.value / 2);
      circle.style.top = topIndent + "px";
      leftIndent = +(inputSaveSquare.value / 2 - inputSaveCircle.value / 2);
      circle.style.left = leftIndent + "px";
      localStorage.setItem("localCircleTop", circle.style.top);
      localStorage.setItem("localCircleLeft", circle.style.left);
      localStorage.setItem("localTopIndent", topIndent);
      localStorage.setItem("localLeftIndent", leftIndent);
    }

    if (
      +inputSaveSquare.value <= 0 ||
      +inputSaveCircle.value <= 0 ||
      +inputSaveStep.value <= 0
    ) {
      buttonUp.disabled = true;
      buttonLeft.disabled = true;
      buttonRight.disabled = true;
      buttonDown.disabled = true;
    } else {
      buttonUp.disabled = false;
      buttonLeft.disabled = false;
      buttonRight.disabled = false;
      buttonDown.disabled = false;
    }

    if (+inputSaveStep.value !== 0) {
      if (+inputSaveStep.value > topIndent) {
        alert("Шаг больше допустимого");
        buttonUp.disabled = true;
        buttonLeft.disabled = true;
        buttonRight.disabled = true;
        buttonDown.disabled = true;
      } else {
        buttonUp.disabled = false;
        buttonLeft.disabled = false;
        buttonRight.disabled = false;
        buttonDown.disabled = false;
      }
    }

    switch (buttonTypeSave) {
      case "button-save-square":
        if (+inputSaveSquare.value <= 0) {
          alert("Длина квадрата не верна");
        } else {
          if (+inputSaveCircle.value > +inputSaveSquare.value) {
            alert(
              "Невозожно вписать круг по заданным параметрам. Измените диаметр окружности или длину квадрата"
            );
          } else {
            square.style.width = inputSaveSquare.value + "px";
            square.style.height = inputSaveSquare.value + "px";
            square.style.display = "block";
            buttonSaveCircle.disabled = false;
            localStorage.setItem("localSquare", inputSaveSquare.value);
            localStorage.setItem("localSquareWidth", square.style.width);
            localStorage.setItem("localSquareHeight", square.style.height);
            localStorage.setItem("localSquareDisplay", square.style.display);
          }
        }
        break;

      case "button-save-circle":
        if (+inputSaveCircle.value <= 0) {
          alert("Диаметр круга не верен");
        } else {
          if (+inputSaveCircle.value > +inputSaveSquare.value) {
            alert(
              "Невозожно вписать круг по заданным параметрам. Измените диаметр окружности или длину квадрата"
            );
          } else {
            circle.style.width = inputSaveCircle.value + "px";
            circle.style.height = inputSaveCircle.value + "px";
            circle.style.display = "block";
            buttonSaveStep.disabled = false;
            localStorage.setItem("localCircle", inputSaveCircle.value);
            localStorage.setItem("localCircleWidth", circle.style.width);
            localStorage.setItem("localCircleHeight", circle.style.height);
            localStorage.setItem("localCircleDisplay", circle.style.display);
          }
        }
        break;

      case "button-save-step":
        step = +inputSaveStep.value;
        localStorage.setItem("localStep", step);
        break;
    }
  }
});

//Кнопки смещения круга
buttonsBlock.addEventListener("click", (e) => {
  const buttonType = e.target.dataset.type;
  if (buttonType) {
    switch (buttonType) {
      case "button-up":
        if (topIndent >= inputSaveStep.value) {
          circle.style.top = topIndent - +inputSaveStep.value + "px";
          topIndent = topIndent - inputSaveStep.value;
          buttonDown.disabled = false;
          if (topIndent < inputSaveStep.value) {
            buttonUp.disabled = true;
          }
        }
        break;

      case "button-down":
        if (topIndent <= inputSaveSquare.value - inputSaveCircle.value) {
          circle.style.top = topIndent + +inputSaveStep.value + "px";
          topIndent = topIndent + +inputSaveStep.value;
          buttonUp.disabled = false;
          if (
            topIndent + +inputSaveStep.value >
            +inputSaveSquare.value - +inputSaveCircle.value
          ) {
            buttonDown.disabled = true;
          }
        }
        break;

      case "button-left":
        if (leftIndent >= inputSaveStep.value) {
          circle.style.left = leftIndent - inputSaveStep.value + "px";
          leftIndent = leftIndent - inputSaveStep.value;
          buttonRight.disabled = false;
          if (leftIndent < inputSaveStep.value) {
            buttonLeft.disabled = true;
          }
        }
        break;

      case "button-right":
        if (leftIndent <= inputSaveSquare.value - inputSaveCircle.value) {
          circle.style.left = leftIndent + +inputSaveStep.value + "px";
          leftIndent = leftIndent + +inputSaveStep.value;
          buttonLeft.disabled = false;
          if (
            leftIndent + +inputSaveStep.value >
            inputSaveSquare.value - inputSaveCircle.value
          ) {
            buttonRight.disabled = true;
          }
        }
        break;
    }
  }
});
