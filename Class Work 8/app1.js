const addUl = document.getElementById("addUl");
const addLi = document.getElementById("addLi");
const delLi = document.getElementById("delLi");

let newUl;
let newLi;

addUl.addEventListener("click", () => {
  if (newUl) {
    alert("Список уже существует.");
  } else {
    newUl = document.createElement("ul");
    document.body.appendChild(newUl);
    alert("Список создан.");
  }
});

addLi.addEventListener("click", () => {
  if (newUl) {
    newLi = document.createElement("li");
    newUl.appendChild(newLi);
    newLi.innerHTML = new Date().toLocaleString();
  } else {
    alert("Не удалось добавить элемент. Списка не существует.");
  }
});

delLi.addEventListener("click", () => {
  liLength = document.getElementsByTagName("li");

  if (liLength.length === 0) {
    alert("Не удалось удалить элемент. Списка не существует или он пуст.");
  } else {
    newUl.removeChild(newUl.lastChild);
  }
});
