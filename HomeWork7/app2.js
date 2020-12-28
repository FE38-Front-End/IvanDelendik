const imp = document.getElementById("list");
const n = prompt("Введите длину списка от 1 до n");
for (i = 1; i <= n; i++) {
  const newLi = document.createElement("li");
  newLi.innerHTML = i;
  imp.appendChild(newLi);
}
