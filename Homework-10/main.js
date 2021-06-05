// HOMEWORK 10
// Task 1
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Task 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

// Task 3
function readNumber() {
    let num;
    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));
    if (num === null || num === '') return null;
    return +num;
}

// Task 4
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Task 5
function randomInteger(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

// Task 6
function ucFirst(str) {
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
}

// Task 7
function checkSpam(str) {
    let noRegister = str.toLowerCase();
    return noRegister.includes('viagra') || noRegister.includes('xxx');
}

// Task 8
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    } else return str;
}

// Task 9
function extractCurrencyValue(str) {
    return +str.slice(1);
}

// Task 10
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

// Task 11 
// opt 1
function getMaxSubSum(arr) {
    let maxSubSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let start = 0;
        for (let j = i; j < arr.length; j++) {
            start += arr[j];
            maxSubSum = Math.max(maxSum, start);
        }
    }
    return maxSubSum;
}
// opt2
function getMaxSubSum2(arr) {
    let maxSubSum = 0;
    let partialSum = 0;
    for (let item of arr) {
        partialSum += item;
        maxSubSum = Math.max(maxSubSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSubSum;
}


// Task 12
// Нет отличий в работе данных двух функций, так как если первое условие сработет, после первого return функция остановит свою работу. Если условие не выполнится, то выполняется else, или, во втором случае, возвращается confirm

// Task 13
function checkAge1(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

// Task 14
function min(a, b) {
    return a < b ? a : b;
}

// Task 15
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//     alert(pow(x, n));
// }

// Task 16
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );

// Task 17
function task17() {
    let palmCost = 8000;
    let salary = 3333;
    let expenses = 1750;
    return `За ${Math.ceil(palmCost / (salary - expenses))} месяцев`;
}

// Task 18
function task18() {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        let num = +prompt("Введите число", 0);
        if (num < 0) {
            sum += num;
        }
    }
    return sum;
}


// HOMEWORK 10-1
// Task 1
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
//alert(fruits.length); // Данный код выведет 4, так как массив является обьектом, а данные массивы являются ссылками на одну сущность.

// Task 2
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");


// Task 3
// let arr = ["a", "b"];
// arr.push(function() {
// alert( this );
// })
// arr[2](); // В результате будет массив, в котором 3 элемента, третьим элементом является функция (метод). Мы увидим ведь массив, а не только функцию потому, что this в данном контексте и будет ссылаться на массив arr.

