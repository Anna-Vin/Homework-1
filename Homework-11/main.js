// Task 1
function copySorted(arr) {
    return arr.slice().sort(); // так как slice без аргументов создает копию массива
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);

// Task 2
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];

let names = users.map(item => item.name);
console.log(names);

// Task 3
function getAverageAge(arr) {
    return Math.floor(arr.reduce((a, b) => a + b.age, 0) / arr.length);
}

console.log(getAverageAge(users));

// Task 4
function unique(arr) {
    return Array.from(new Set(arr));
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

// Task 5
function sum(a) {
    return function (b) { return a + b }
}
console.log(sum(1)(3));

// Task 6
let arr2 = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (c) {
        return c >= a && c <= b;
    }
}

function inArray(arr) {
    return function (a) {
        return arr.includes(a);
    }
}

console.log(arr2.filter(inBetween(3, 6)));
console.log(arr2.filter(inArray([1, 2, 10])));

// Task 7
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

// Task 8
function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}