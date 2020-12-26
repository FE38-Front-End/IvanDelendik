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

buttonUp.disabled = true;
buttonLeft.disabled = true;
buttonRight.disabled = true;
buttonDown.disabled = true;
buttonSaveCircle.disabled = true;
buttonSaveStep.disabled = true;

function loacalSave() {
  inputSaveSquare.value = localStorage.getItem("localSquare");
  inputSaveCircle.value = localStorage.getItem("localCircle");
  inputSaveStep.value = localStorage.getItem("localStep");
}

loacalSave();

buttonsBlockSave.addEventListener("click", (e) => {
  const buttonTypeSave = e.target.dataset.type;

  if (buttonTypeSave) {
    topIndent = +(inputSaveSquare.value / 2 - inputSaveCircle.value / 2);
    circle.style.marginTop = topIndent + "px";
    leftIndent = +(inputSaveSquare.value / 2 - inputSaveCircle.value / 2);
    circle.style.marginLeft = leftIndent + "px";

    step = +inputSaveStep.value;
    if (topIndent >= step) {
      buttonUp.disabled = false;
      buttonLeft.disabled = false;
      buttonRight.disabled = false;
      buttonDown.disabled = false;
    } else {
      buttonUp.disabled = true;
      buttonLeft.disabled = true;
      buttonRight.disabled = true;
      buttonDown.disabled = true;
    }

    switch (buttonTypeSave) {
      case "button-save-square":
        if (+inputSaveCircle.value >= +inputSaveSquare.value) {
          alert(
            "Ошибка, невозожно вписать круг по заданным параметрам. Измените диаметр окружности или длину квадрата"
          );
        } else {
          square.style.width = inputSaveSquare.value + "px";
          square.style.height = inputSaveSquare.value + "px";
          square.style.display = "block";
          localStorage.setItem("localSquare", inputSaveSquare.value);
          buttonSaveCircle.disabled = false;
        }
        break;

      case "button-save-circle":
        if (+inputSaveCircle.value >= +inputSaveSquare.value) {
          alert(
            "Ошибка, невозожно вписать круг по заданным параметрам. Измените диаметр окружности или длину квадрата"
          );
        } else {
          circle.style.width = inputSaveCircle.value + "px";
          circle.style.height = inputSaveCircle.value + "px";
          localStorage.setItem("localCircle", inputSaveCircle.value);
          circle.style.display = "block";
          buttonSaveStep.disabled = false;
        }
        break;

      case "button-save-step":
        step = +inputSaveStep.value;
        localStorage.setItem("localStep", inputSaveStep.value);
        if (topIndent >= step) {
          buttonUp.disabled = false;
          buttonLeft.disabled = false;
          buttonRight.disabled = false;
          buttonDown.disabled = false;
        }
        break;
    }
  }
});

buttonsBlock.addEventListener("click", (e) => {
  const buttonType = e.target.dataset.type;

  if (buttonType) {
    switch (buttonType) {
      case "button-up":
        if (topIndent - step >= 0) {
          circle.style.marginTop = topIndent - step + "px";
          topIndent = topIndent - step;
          buttonDown.disabled = false;
        }
        if (topIndent < step) {
          buttonUp.disabled = true;
        }
        break;

      case "button-down":
        if (topIndent < inputSaveSquare.value - inputSaveCircle.value) {
          circle.style.marginTop = topIndent + step + "px";
          topIndent = topIndent + step;
          buttonUp.disabled = false;
        }
        if (topIndent + step > inputSaveSquare.value - inputSaveCircle.value) {
          buttonDown.disabled = true;
        }
        break;

      case "button-left":
        if (leftIndent - step >= 0) {
          circle.style.marginLeft = leftIndent - step + "px";
          leftIndent = leftIndent - step;
          buttonRight.disabled = false;
        }
        if (leftIndent < step) {
          buttonLeft.disabled = true;
        }
        break;

      case "button-right":
        if (leftIndent < inputSaveSquare.value - inputSaveCircle.value) {
          circle.style.marginLeft = leftIndent + step + "px";
          leftIndent = leftIndent + step;
          buttonLeft.disabled = false;
        }
        if (leftIndent + step > inputSaveSquare.value - inputSaveCircle.value) {
          buttonRight.disabled = true;
        }
        break;
    }
  }
});
