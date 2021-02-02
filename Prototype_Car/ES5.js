function Car(
  name,
  model,
  year,
  color,
  maxSpeed,
  fuelCapacity,
  fuelConsumption
) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.color = color || "white";
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

Car.prototype.changeColor = function () {};

const bmw = new Car("BMW", "i8", "2015", "280");
bmw.getFullName();
bmw.getAge();
bmw.changeColor();
console.log(bmw.color);

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.superclass = Parent.prototype;
}
