const lCase = prompt("Введите длину контейнера");
const wCase = prompt("Введите ширину контейнера");
const hCase = prompt("Введите высоту контейнера");

const dPipe = prompt("Введите диаметр трубы");

let numberPipeWidth = Math.floor(wCase / dPipe);
let numberPipeheight = Math.floor(hCase / dPipe);
let numberPipe = numberPipeheight * numberPipeWidth * lCase;

alert(numberPipe);
