const calc = document.querySelector(".calc");
const seven = document.querySelector(".seven");
const calcParam = document.querySelector(".calc-param");

let aa = calcParam.children[0].textContent;
console.log(Number.isInteger(+aa));
console.log(aa);

calcParam.addEventListener("click", (e) => {
  let buttonType = e.target.dataset.type;
  console.log(1);
  if (buttonType) {
    switch (buttonType) {
      case "seven":
        console.log(123);
        break;
      case "":
        break;
    }
  }
});
