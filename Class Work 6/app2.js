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
let arrOffSquare = [];
let arrPipeOffN = [];
let arrPipeOffS = [];

arrSPipe.push(Math.PI * Math.pow(arrDPipe[0] / 2, 2));
arrNPipeAll.push(Math.floor(sCase / (Math.PI * Math.pow(arrDPipe[0] / 2, 2))));
arrPipeInLenght.push(arrNPipeAll[0] * lCase);

//Остаточная площадь после первой итерации
arrOffSquare.push(sCase - arrSPipe[0] * arrNPipe[0]);

//Количество труб поместившихся в остаточную площадь после первой итерации
arrPipeOffN.push(Math.floor(arrOffSquare / arrSPipe[1]));

//Площадь занимаемая трубами в отсаточной площади
arrPipeOffS.push(arrSPipe[1] * arrPipeOffN[0]);

//Остаток от остатка
arrOther.push(arrOffSquare[0] - arrPipeOffS[0]);

//Результирующая
arrRes.push(
  arrOffSquare[0] - arrSPipe[1] * Math.floor(arrOffSquare[0] / arrSPipe[1])
);

//Остаточная площадь после второй итерации
arrPipeOffSquare.push(arrPipeOffSquare[0] - arrSPipe[1] * arrNPipe[1]);

arrPipeOffLenght.push(
  Math.floor((sCase - arrSPipe[0] * arrNPipe[0]) / arrSPipe[1]) * lCase
);

arrPipeOffSquare.push(
  Math.floor((arrSPipe[0] - arrSPipe[1] * arrNPipe[1]) / arrSPipe[2])
);

arrPipeOffLenght.push(
  Math.floor((arrSPipe[0] - arrSPipe[1] * arrNPipe[1]) / arrSPipe[2]) * lCase
);

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

console.log(arrSPipe);
console.log(arrNPipeAll);
console.log(arrPipeInLenght);
