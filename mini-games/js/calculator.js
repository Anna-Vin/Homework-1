// Elements 
const total = document.querySelector('.total');
const acc = document.querySelector('.acc');
const clean = document.querySelector('.clean');
const cleanEntry = document.querySelector('.cleanEntry');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');
const num7 = document.querySelector('.num7');
const num8 = document.querySelector('.num8');
const num9 = document.querySelector('.num9');
const zero = document.querySelector('.zero');
const multiply = document.querySelector('.multiply');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const coma = document.querySelector('.coma');
const result = document.querySelector('.result');
const num = document.querySelectorAll('.num');

// Calculator
let count = [];
let saveAction = null;
let currentNumber = null;
let currentAcc = null;

// Click number
function addNumber(number) {
    total.hidden = false;
    if (total.innerHTML.length < 10) total.innerHTML += number;
}

num1.addEventListener('click', () => addNumber(1));
num2.addEventListener('click', () => addNumber(2));
num3.addEventListener('click', () => addNumber(3));
num4.addEventListener('click', () => addNumber(4));
num5.addEventListener('click', () => addNumber(5));
num6.addEventListener('click', () => addNumber(6));
num7.addEventListener('click', () => addNumber(7));
num8.addEventListener('click', () => addNumber(8));
num9.addEventListener('click', () => addNumber(9));
zero.addEventListener('click', () => addNumber(0));

// Click action
function calcAction(action) {
    currentNumber = total.innerHTML;
    if (currentNumber.length === 0) return;
    count.push(+currentNumber);
    acc.hidden = false;
    acc.innerHTML += ` ${currentNumber} ${action}`
    total.innerHTML = "";
    count.push(action);
}

plus.addEventListener('click', () => calcAction('+'));
minus.addEventListener('click', () => calcAction('-'));
multiply.addEventListener('click', () => calcAction('*'));
divide.addEventListener('click', () => calcAction('/'));

function addComa() {
    if (!+total.innerHTML.includes(".")) {
        total.innerHTML += ".";
    }
}

coma.addEventListener('click', () => addComa());

function calcPercent() {
    currentNumber = +total.innerHTML;
    if (currentNumber != "") {
        total.innerHTML = +total.innerHTML / 100;
    }
}

percent.addEventListener('click', () => calcPercent());

// Clean
function cleanEntryOnly() {
    total.innerHTML = "";
}

function cleanAll() {
    cleanEntryOnly();
    acc.innerHTML = "";
    count = [];
    num.forEach(item => item.disabled = false);
}

cleanEntry.addEventListener('click', () => cleanEntryOnly());
clean.addEventListener('click', () => cleanAll());



// Processing
function processAction(a, b, action) {

    switch (action) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}


function getResult() {
    currentAcc = +acc.innerHTML;
    currentNumber = +total.innerHTML;


    if (currentAcc[currentAcc.length - 1] === "=" && currentNumber.length > 0) {
        total.innerHTML = processAction(+currentNumber, +currentNumber, saveAction).toString().substring(0, 10);
    }

    if (count.length === 0) { return }
    count.push(+total.innerHTML);

    acc.innerHTML += ` ${total.innerHTML} =`;
    proccessResult();
}

result.addEventListener('click', () => getResult());

function proccessResult() {
    let action = null
    let current = null

    let outcome = 0;

    if (isNaN(count[count.length - 1])) {
        count.pop()
    }

    count.forEach(number => {
        if (!isNaN(number)) {
            if (current == null) {
                current = number;
            } else {
                outcome += processAction(current, number, action);
                if (outcome == "Infinity") {
                    outcome = `НЕЛЬЗЯ`
                    total.innerHTML = outcome;
                    count = [];
                    cleanAll();
                    num.forEach(item => item.disabled = true);
                    clean.disabled = false;
                };
                current = null;
            }
        } else {
            action = number;
            saveAction = number;
        }
    })

    if (current != null && current) {
        outcome = processAction(outcome, current, action);
    }

    total.innerHTML = outcome.toString().substring(0, 10);
    count = [];
}