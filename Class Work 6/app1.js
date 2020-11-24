const lCase = prompt("Введите длину контейнера");
const wCase = prompt("Введите ширину контейнера");
const hCase = prompt("Введите высоту контейнера");

const dPipe = prompt("Введите диаметр перовой трубы");

const sCase = wCase * hCase;
const sPipe = Math.PI * Math.pow(dPipe / 2, 2);
const PipeinCaseLenght = Math.floor(sCase / sPipe) * lCase;

alert(PipeinCaseLenght);
