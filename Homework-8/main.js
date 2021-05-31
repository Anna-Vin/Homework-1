// Task 1

// let admin;
// let name = "Anna";
// admin = name;
// alert(admin)

// Task 2
const birthday = '18.04.1982'; // Можно, так как значение известно до выполнения скрипта
// const age = someCode(birthday); // Нельзя, значение age вычисляется во время выполнения скрипта

// Task 3
let name = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Ilya

// Task 4
"" + 1 + 0 // "10" 
"" - 1 + 0 // -1 
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9  " + 5 // "  -9  5" 
"  -9  " - 5 // -14 
null + 1 // 1 
undefined + 1 // NaN 
" \t \n" - 2 // -2 

// Task 5
// let a = 1, b = 1;
// let c = ++a;
// let d = b++; 
// a = 2, b = 2, -> При дальнейшем вызове из-за инкремента ; c = 2, d = 1;

// Task 6
let a = 2;
let x = 1 + (a *= 2);
// a = 4 (так как умножено на 2), x = 5 

// Task 7
5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

// Task 8
// const userName = prompt();
// alert(`${userName}`);

// Task 9
// alert выведется, так как 0 в данном случае является строкой, а не числом и преобразуется в true, а значит, условие выполняется


// Task 10

// let res = prompt('What`s the "официальное" название JavaScript?', '');

// if (res == 'ECMAScript') {
//   alert('Правильно!');
// } else {
//   alert('You dont`t know? "ECMAScript!"');
// }

// Task 11
let answer = prompt('Введите число');
if (answer > 0) {
    alert(1);
} else if (answer < 0) {
    alert(-1);
} else {
    alert(0);
}

// Task 12
let result;
result = (a + b < 4) ? 'Мало' : 'Много';

// Task 13
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';


// Task 14
// Код ниже выведет 2. Цепочка ИЛИ "||" возвращает первое истинное значение или последнее, если значение не найдено.

// Task 15
// Код выведет сначала значение 1, потом 2.

// Task 16
// Код выведет null, так как это первое ложное значение из списка.

// Task 17
// Код выведет сначала 1, потом undefined. До правого alert выполнение кода не дойдет. Вызов alert не возвращает значения, т.е. будет undefined.

// Task 18
// Код выведет 3, так как приоритет оператора && выше, чем ||, поэтому он выполнится первым.

// Task 19
if (age >= 14 && age <= 90)

// Task 20
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)

// Task 21 
// Выполнятся первый и третий алерт, соответственно результатами значений будут 'first' и 'third'

// Task 22
let login = prompt('Кто там?', '');

if (login == 'Админ') {
    let password = prompt('Пароль?');
    if (password == 'Я главный') {
        alert('Здравствуйте!');
    } else if (password == '' || password == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login == '' || login == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}

// Task 23
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

// Task 24
const number = +prompt('Введите число между 0 и 3');
switch (number) {
  case 0:
    alert('0');
    break;

  case 1:
    alert('1');
    break;

  case 2:
  case 3:
    alert('2, 3');
    break;
}



// Task 25
function task25(a) {
    if (a > 0) {
        a = ++a;
    }
    console.log(a)
}

// Task 26
function task26(a) {
    if (a > 0) {
        a = ++a;
    } else a -= 2;
    console.log(a)
}

// Task 27
function task27(a) {
    if (a > 0) {
        a = ++a;
    } else if (a < 0) {
        a -= 2;
    } else a = 10;
    console.log(a)
}

// Task 28
function task28(a, b, c) {
    let res = 0;
    if (a > 0) res++;
    if (b > 0) res++;
    if (c > 0) res++;
    console.log(res);
}

// Task 29
function task29(a, b, c) {
    let pos = 0;
    let neg = 0;
    if (a > 0) pos++; else if (a < 0) neg++;
    if (b > 0) pos++; else if (b < 0) neg++;
    if (c > 0) pos++; else if (c < 0) neg++;
    console.log("Positive:", pos, ", ", "Negative:", neg);
}

// Task 30
function task30(a, b) {
    if (a > b) {
        console.log(a)
    } else if (b > a) {
        console.log(b)
    } else console.log("Numbers are equal")
}

// Task 31
function task31(a, b) {
    if (a > b) {
        console.log(2)
    } else console.log(1)
}

// Task 32
function task32(a, b) {
    if (a > b) {
        console.log(a, b)
    } else console.log(b, a)
}

// Task 33
function task33(a, b) {
    let aDef = a;
    let bDef = b;
    if (a > b) {
        a = bDef;
        b = aDef
    }
    console.log(a, b)
}


// Task 34
function task34(a, b) {
    if (a != b) {
        a = b = a + b;
    } else
        a = b = 0;
    console.log(a, b)
}


// Task 35
function task35(a, b) {
    if (a != b) {
        if (a > b) {
            b = a;
        } else a = b;
    } else
        a = b = 0;
    console.log(a, b)
}


// Task 36
function task36(a, b, c) {
    let min;
    if (a < b && a < c) {
        min = a;
    } else if (b < a && b < c) {
        min = b;
    } else if (c < a && c < b) {
        min = c;
    }
    console.log(min);
}

// Task 37 
function task37(a, b, c) {
    let mid;
    if ((a < b && a > c) || (a > b && a < c)) {
        mid = a;
    } else if ((b < a && b > c) || (b > a && b < c)) {
        mid = b;
    } else if ((c < a && c > b) || (c > a && c < b)) {
        mid = c;
    }
    console.log(mid);
}

// Task 38
function task38(a, b, c) {
    let min, max;
    if (a < b && a < c) min = a;
    else if (b < a && b < c) min = b;
    else min = c;

    if (a > b && a > c) max = a;
    else if (b > a && b > c) max = b;
    else max = c;

    console.log("Min:", min, ", ", "Max:", max)
}

// Task 39
function task39(a, b, c) {
    let res;
    if (b > a && c > a) res = b + c;
    else if (a > b && c > b) res = a + c;
    else res = a + b;
    console.log(res);
}

// Task 40
function task40(a, b, c) {
    let res;
    if (a != b && a != c && b != c) res = "No matching numbers";
    else if (a == b && b == c && a == c) res = "All numbers are matching";
    else {
        ((a != b && b == c) ? res = 1 : ((a == c) ? res = 2 : res = 3))
    }
    console.log(res);
}
