// A)

let v = 'First var';
alert(v);
v = 'Second var';
alert(v)

// B)

const integer = 13;
const agree = true;
const und = undefined;
const nu = null;
alert(`${integer} ${agree} ${und} ${nu}`);

let obj = {};
obj.name = 'Ivan';
obj.age = 26;
let fruits = ['apple', 'banana', 'orange'];
console.log(obj);
console.log(fruits);

// С)

const age = prompt('Каков ваш возраст?');
if (age == '' || age == null) {
        alert('Поздравляем, вам 0 полных лет!!!');
    }
    else {
        alert(`Поздравляем, вам ${age} полных лет!!!`);
    }

if (age >=18) {
        alert('Вы совершеннолетний!');
    }
    else {
        alert('Вы несовершеннолетний!');
    }



