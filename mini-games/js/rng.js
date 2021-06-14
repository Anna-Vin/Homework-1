// Elements
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const quantity = document.querySelector('.quantity');
const generate = document.querySelector('.generate');
const result = document.querySelector('.result');

// RNG
let minimum = 0;
let maximum = 0;
let count = 0;
let res = [];

function generateNumber() {
    minimum = +min.value;
    maximum = +max.value;
    count = +quantity.value;
    let set = new Set;
    let maxLength = maximum - minimum + 1;

    if (maxLength >= count) {
        while (set.size < count) {
            set.add(Math.floor(Math.random() * maxLength + minimum));
        }
    } else {
        while (set.size < maxLength) {
            set.add(Math.floor(Math.random() * maxLength + minimum));
        }
    }
    res = Array.from(set);
    if (minimum && maximum && count && maxLength > 0 && count > 0) {
        showResult(res)
    }
}

function showResult(arr) {
    result.hidden = false;
    result.innerHTML = arr;
}

generate.addEventListener('click', () => generateNumber());