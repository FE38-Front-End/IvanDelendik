const floorArr = [];
const entranceArr = [];
const floorInTheHouseArr = [];

const floor = Number(prompt(`Укажите этажность:`));
const entrance = Number(prompt(`Укажите число подъездов:`));
const apart = Number(
  prompt(`Укажите количество квартир на лестничной площадке:`)
);
const room = Number(prompt(`Укажите номер квартиры:`));

const apartInTheEntrance = floor * apart;
const apartInTheHouse = floor * entrance * apart;
const floorInTheHouse = floor * entrance;

// Вычисление подъезда
for (let i = 0; i <= apartInTheHouse; i += apartInTheEntrance) {
  entranceArr.push(i);
}

let resultEntrance = null;
for (let i = 0; i < entranceArr.length; i++) {
  if (room > entranceArr[i] && room <= entranceArr[i + 1]) {
    resultEntrance = i + 1;
  }
}

// Промежуточное вычисление этажа
for (let i = 0; i <= apartInTheHouse; i += apart) {
  floorArr.push(i);
}

let subResultFloor = null;
for (let i = 0; i < floorArr.length; i++) {
  if (room > floorArr[i] && room <= floorArr[i + 1]) {
    subResultFloor = i + 1;
  }
}

// Вычисление этажа
for (let i = 0; i <= floorInTheHouse; i += floor) {
  floorInTheHouseArr.push(i);
}

let resultFloor = null;
for (let i = 0; i < floorArr.length; i++) {
  if (
    subResultFloor > floorInTheHouseArr[i] &&
    subResultFloor <= floorInTheHouseArr[i + 1]
  ) {
    resultFloor = subResultFloor - floorInTheHouseArr[i];
  }
}

if (resultFloor > 0 && resultEntrance > 0) {
  alert(`Вы проживаете в ${resultEntrance} подъезде, на ${resultFloor} этаже!`);
} else {
  alert(`Вводимые данные некорректны!`);
}
