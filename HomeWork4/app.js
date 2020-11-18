function sequence(start = 0, step = 1) {
  return function () {
    return (start += step);
  };
}

let generator = sequence(10, 3);

alert(generator());
alert(generator());
alert(generator());
