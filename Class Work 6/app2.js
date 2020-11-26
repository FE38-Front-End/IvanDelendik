lCase = prompt("Введите длину контейнера в метрах");
wCase = prompt("Введите ширину контейнера в метрах");
hCase = prompt("Введите высоту контейнера в метрах");

let sCase = wCase * hCase;

// Создание массива диаметров труб
let arrDPipe = [];
let itaration = 1;
while (true) {
  let dPipe = prompt(`Введите диаметр ${itaration}-ой трубы`);
  itaration++;
  arrDPipe.push(+dPipe);
  if (!dPipe) break;
}

arrDPipe.sort((n1, n2) => n2 - n1).pop();

let arrSPipe = [];
let arrNPipeAll = [];
let arrPipeInLenght = [];

arrSPipe.push(Math.PI * Math.pow(arrDPipe[0] / 2, 2));
arrNPipeAll.push(Math.floor(sCase / (Math.PI * Math.pow(arrDPipe[0] / 2, 2))));
arrPipeInLenght.push(arrNPipeAll[0] * lCase);

for (i = 1; i < arrDPipe.length; i++) {
  arrSPipe.push(Math.PI * Math.pow(arrDPipe[i] / 2, 2));
  arrNPipeAll.push(
    Math.floor(arrSPipe[i - 1] / arrSPipe[i]) * arrNPipeAll[i - 1]
  );
  arrPipeInLenght.push(arrNPipeAll[i] * lCase);
}

for (i = 1; i <= arrDPipe.length; i++) {
  alert(
    `Все величиты в метрах \n Диаметр трубы ${arrDPipe[i - 1]} \n Вместимость ${
      arrPipeInLenght[i - 1]
    }`
  );
}
