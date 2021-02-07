class CarES6 {
  constructor({
    name,
    model,
    year,
    color,
    maxSpeed,
    fuelCapacity,
    fuelConsumption,
  }) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity || 60;
    this.fuelConsumption = fuelConsumption || 10;
  }

  getFullName() {
    console.log("Полное имя: " + this.name + " " + this.model);
  }

  getAge() {
    console.log(
      "Возраст автомобиля: " + (new Date().getFullYear() - this.year)
    );
  }

  changeColor(color) {
    if (color === this.color) {
      console.log(`Цвет совпадает с оригиналом`);
    } else {
      console.log(`Цвет изменен на ${color}`);
    }
  }

  calculateWay(kilometers, fuel) {
    if (fuel < 10) {
      console.log(`Необходимо заправить топливо`);
    }
    time = (kilometers / this.maxSpeed).toFixed(2);
    console.log(
      `${time} часа(ов) необходимо чтобы преодалеть ${kilometers} километров(а)`
    );
    numberOil = Math.ceil(
      (kilometers / this.fuelConsumption - fuel) / this.fuelCapacity
    );
    console.log(`${numberOil} дозаправки(вок) необходимо`);
  }
}

class BmwES6 extends CarES6 {
  constructor(Luke) {
    super(Luke);
    this.Luke = true;
  }
}

const bmwES6 = new BmwES6({
  name: "BMW",
  model: "i8",
  year: "2015",
  color: "blue",
  maxSpeed: "280",
  fuelCapacity: "30",
  fuelConsumption: "20",
});

class ToyotaES6 extends CarES6 {
  constructor(climateСontrol) {
    super(climateСontrol);
    this.climateСontrol = true;
  }
}

const toyotaES6 = new ToyotaES6({
  name: "Toyota",
  model: "RAV4",
  year: "2017",
  color: "black",
  maxSpeed: "200",
  fuelCapacity: "60",
  fuelConsumption: "15",
});

class MazdaES6 extends CarES6 {
  constructor(ledLamp) {
    super(ledLamp);
    this.ledLamp = true;
  }
}

const mazdaES6 = new MazdaES6({
  name: "Mazda",
  model: "CX-5",
  year: "2014",
  color: "blue",
  maxSpeed: "240",
  fuelCapacity: "50",
  fuelConsumption: "8",
});

console.log(bmwES6);
bmwES6.getFullName();
bmwES6.getAge();
bmwES6.changeColor("green");
bmwES6.calculateWay("1000", "10");

console.log(toyotaES6);
toyotaES6.getFullName();
toyotaES6.getAge();
toyotaES6.changeColor("red");
toyotaES6.calculateWay("300", "50");

console.log(mazdaES6);
mazdaES6.getFullName();
mazdaES6.getAge();
mazdaES6.changeColor("blue");
mazdaES6.calculateWay("500", "30");
