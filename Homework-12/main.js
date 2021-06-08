// Task 1
// console.log(document.body.firstElementChild)
// console.log(document.body.querySelector('ul'))
// console.log(document.body.querySelector('ul').lastElementChild)

// Task 2
let table = document.body.querySelector('table');
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

// Task 3
let tableAge = document.getElementById('age-table');
tableAge.getElementsByTagName('label');
tableAge.querySelector('td');
let form = document.querySelector('form[name="search"]');
form.querySelector('input');
let inputs = form.querySelectorAll('input');
let lastInput = inputs[inputs.length - 1];

// Task 4
// for (let li of document.querySelectorAll('li')) {
//     let title = li.firstChild.data;
//     console.log(title)
//     console.log(li.getElementsByTagName('li').length)
// }


// Task 5
function clear(elem) {
    elem.innerHTML = '';
}

// Task 6
// let ul = document.createElement('ul');
// document.body.append(ul);

// while (true) {
//     let data = prompt("Введите содержимое пункта списка", "");
//     if (!data) {
//         break;
//     }
//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }

// Task 7
let lis = document.querySelectorAll('.animals li');
for (let li of lis) {
    let count = li.getElementsByTagName('li').length;
    if (!count) continue;
    li.firstChild.data += ` [${count}]`;
}

// Task 8
function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

function createCalendar(elem, year, month) {

    let d = new Date(year, (month - 1));
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == month - 1) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }
    table += '</tr></table>';

    elem.innerHTML = table;
}

createCalendar(calendar, 2012, 9);

// Task 9
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');