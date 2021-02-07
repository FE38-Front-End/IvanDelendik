function Car({
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

Car.prototype.getFullName = function () {
  console.log("Полное имя: " + this.name + " " + this.model);
};

Car.prototype.getAge = function () {
  console.log("Возраст автомобиля: " + (new Date().getFullYear() - this.year));
};

Car.prototype.changeColor = function (color) {
  if (color === this.color) {
    console.log(`Цвет совпадает с оригиналом`);
  } else {
    console.log(`Цвет изменен на ${color}`);
  }
};

Car.prototype.calculateWay = function (kilometers, fuel) {
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
};

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.superclass = Parent.prototype;
}

function Bmw(Luke) {
  Bmw.superclass.constructor.call(this, Luke);
  this.Luke = true;
}

extend(Bmw, Car);

const bmw = new Bmw({
  name: "BMW",
  model: "i8",
  year: "2015",
  color: "blue",
  maxSpeed: "280",
  fuelCapacity: "30",
  fuelConsumption: "20",
});

function Toyota(climateСontrol) {
  Toyota.superclass.constructor.call(this, climateСontrol);
  this.climateСontrol = true;
}

extend(Toyota, Car);

const toyota = new Toyota({
  name: "Toyota",
  model: "RAV4",
  year: "2017",
  color: "black",
  maxSpeed: "200",
  fuelCapacity: "60",
  fuelConsumption: "15",
});

function Mazda(ledLamp) {
  Mazda.superclass.constructor.call(this, ledLamp);
  this.ledLamp = true;
}

extend(Mazda, Car);

const mazda = new Mazda({
  name: "Mazda",
  model: "CX-5",
  year: "2014",
  color: "red",
  maxSpeed: "240",
  fuelCapacity: "50",
  fuelConsumption: "8",
});

console.log(bmw);
bmw.getFullName();
bmw.getAge();
bmw.changeColor("green");
bmw.calculateWay("1000", "10");

console.log(toyota);
toyota.getFullName();
toyota.getAge();
toyota.changeColor("red");
toyota.calculateWay("300", "50");

console.log(mazda);
mazda.getFullName();
mazda.getAge();
mazda.changeColor("blue");
mazda.calculateWay("500", "30");
