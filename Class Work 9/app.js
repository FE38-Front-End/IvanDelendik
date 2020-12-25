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

buttonSaveSquare.addEventListener("click", () => {
  if (+inputSaveCircle.value >= +inputSaveSquare.value) {
    alert(
      "Ошибка, невозожно вписать круг по заданным параметрам. Измените диаметр окружности или длину квадрата"
    );
  } else {
    square.style.width = inputSaveSquare.value + "px";
    square.style.height = inputSaveSquare.value + "px";
    square.style.display = "block";
  }
});

buttonSaveCircle.addEventListener("click", () => {
  if (+inputSaveCircle.value >= +inputSaveSquare.value) {
    alert(
      "Ошибка, невозожно вписать круг по заданным параметрам. Измените диаметр окружности или длину квадрата"
    );
  } else {
    circle.style.width = inputSaveCircle.value + "px";
    circle.style.height = inputSaveCircle.value + "px";
    topIndent = +(inputSaveSquare.value / 2 - inputSaveCircle.value / 2);
    circle.style.marginTop = topIndent + "px";
    leftIndent = +(inputSaveSquare.value / 2 - inputSaveCircle.value / 2);
    circle.style.marginLeft = leftIndent + "px";
    circle.style.display = "block";
  }
});

buttonSaveStep.addEventListener("click", () => {
  step = +inputSaveStep.value;
  if (topIndent < step) {
    buttonUp.disabled = true;
    buttonLeft.disabled = true;
    buttonRight.disabled = true;
    buttonDown.disabled = true;
  }
});

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
  if (topIndent < inputSaveSquare.value - inputSaveCircle.value) {
    circle.style.marginTop = topIndent + step + "px";
    topIndent = topIndent + step;
    buttonUp.disabled = false;
  }
});

buttonDown.addEventListener("click", () => {
  if (topIndent + step > inputSaveSquare.value - inputSaveCircle.value) {
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
  if (leftIndent < inputSaveSquare.value - inputSaveCircle.value) {
    circle.style.marginLeft = leftIndent + step + "px";
    leftIndent = leftIndent + step;
    buttonLeft.disabled = false;
  }
});

buttonRight.addEventListener("click", () => {
  if (leftIndent + step > inputSaveSquare.value - inputSaveCircle.value) {
    buttonRight.disabled = true;
  }
});
