const square = document.getElementById("square");
const circle = document.getElementById("circle");
const buttonUp = document.getElementById("button-up");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
const buttonDown = document.getElementById("button-down");

while (true) {
  squareLenght = +prompt("Введите длину стороны квадрата в px");
  circleLenght = +prompt("Введите диаметр круга в px");
  if (squareLenght >= circleLenght) {
    break;
  }
  alert("Ошибка, невозожно вписать круг по заданным параметрам");
}

square.style.width = squareLenght + "px";
square.style.height = squareLenght + "px";

circle.style.width = circleLenght + "px";
circle.style.height = circleLenght + "px";

let topIndent = squareLenght / 2 - circleLenght / 2;
circle.style.marginTop = topIndent + "px";

let leftIndent = squareLenght / 2 - circleLenght / 2;
circle.style.marginLeft = leftIndent + "px";

const step = +prompt("Введите шаг в px");

if (topIndent < step) {
  buttonUp.disabled = true;
  buttonLeft.disabled = true;
  buttonRight.disabled = true;
  buttonDown.disabled = true;
}

buttonUp.addEventListener("click", () => {
  if (topIndent - step >= 0) {
    circle.style.marginTop = topIndent - step + "px";
    topIndent = topIndent - step;
    buttonDown.disabled = false;
  }
});

buttonUp.addEventListener("click", () => {
  if (topIndent < step) {
    buttonUp.disabled = true;
  }
});

buttonDown.addEventListener("click", () => {
  if (topIndent < squareLenght - circleLenght) {
    circle.style.marginTop = topIndent + step + "px";
    topIndent = topIndent + step;
    buttonUp.disabled = false;
  }
});

buttonDown.addEventListener("click", () => {
  if (topIndent + step > squareLenght - circleLenght) {
    buttonDown.disabled = true;
  }
});

buttonLeft.addEventListener("click", () => {
  if (leftIndent - step >= 0) {
    circle.style.marginLeft = leftIndent - step + "px";
    leftIndent = leftIndent - step;
    buttonRight.disabled = false;
  }
});

buttonLeft.addEventListener("click", () => {
  if (leftIndent < step) {
    buttonLeft.disabled = true;
  }
});

buttonRight.addEventListener("click", () => {
  if (leftIndent < squareLenght - circleLenght) {
    circle.style.marginLeft = leftIndent + step + "px";
    leftIndent = leftIndent + step;
    buttonLeft.disabled = false;
  }
});

buttonRight.addEventListener("click", () => {
  if (leftIndent + step > squareLenght - circleLenght) {
    buttonRight.disabled = true;
  }
});
