const inputWord = prompt("Введите слово для проверки на полиндром");
const testWord = inputWord.split("").reverse().join("");

if (inputWord.toLowerCase() === testWord.toLowerCase()) {
  alert("Слово является полиндромом!");
} else {
  alert("Слово не является полиндромом!");
}
