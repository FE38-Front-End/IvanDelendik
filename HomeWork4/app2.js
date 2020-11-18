function sum(a) {
  function term(b) {
    a += b;
    return term;
  }
  term.toString = function () {
    return a;
  };
  return term;
}

const x = sum(2)(5)(10);
alert(x); // выводит 17
