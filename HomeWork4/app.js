function sequence(start = 0, step = 1) {
  let startApp = start - step;

  return function () {
    return (startApp += step);
  };
}

let generator = sequence(10, 3);

alert(generator());
alert(generator());
alert(generator());
