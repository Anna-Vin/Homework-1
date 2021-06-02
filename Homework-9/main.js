// Task 1
// Последнее выведенное значение равно 1, так как при проведении проверки после этого значение i будет равно 0, что не удовлетворяет условия проверки.

// Task 2
function task2(a, b, c) {
    if (a < b && b < c) {
        a *= 2;
        b *= 2;
        c *= 2;
    }
    else {
        a = -a;
        b = -b;
        c = -c;
    }
    console.log(a, b, c)
}

// Task 3
function task3(a, b, c) {
    if ((a < b) & (b < c) || (a > b) & (b > c)) {
        a *= 2;
        b *= 2;
        c *= 2;
    } else {
        a = -a;
        b = -b;
        c = -c;
    }
    console.log(a, b, c)
}

// Task 4
function task4(a, b, c) {
    let res = "";
    let distance;
    if ((a <= b) && (b < c) || (a >= b) && (b > c)) {
        if ((a - b) > 0) distance = a - b;
        else distance = (a - b) * -1;
        res = "точка  " + b + "  ближайшая к точке  " + a + "  растояние между ними  " + distance;
    } else if ((a <= c) && (c < b) || (a >= c) && (c > b)) {
        if ((a - c) > 0) distance = a - c;
        else distance = (a - c) * -1;
        res = "точка  " + c + "  ближайшая к точке  " + a + "  растояние между ними  " + distance;
    }
    console.log(res)
}

// Task 5
function task5(x, y) {
    if (x == 0 && y == 0) console.log(0);
    else if (x == 0 && y != 0) console.log(1);
    else if (x != 0 && y == 0) console.log(2);
    else if (x != 0 && y != 0) console.log(3);
}

// Task 6
function task6(x, y) {
    if (x > 0 && y > 0) console.log('Точка лежит в I координатной четверти');
    else if (x < 0 && y > 0) console.log('Точка лежит во II координатной четверти');
    else if (x < 0 && y < 0) console.log('Точка лежит в III координатной четверти');
    else if (x > 0 && y < 0) console.log('Точка лежит в IV координатной четверти');
}

// Task 7
function task7(x1, y1, x2, y2, x3, y3) {
    let x4, y4;
    if (x2 == x3) x4 = x1;
    else if (x1 == x3) x4 = x2;
    else x4 = x3;

    if (y2 == y3) y4 = y1;
    else if (y1 == y3) y4 = y2;
    else y4 = y3;

    console.log(`${x4}; ${y4}`)
}

// Task 8
function task8(year) {
    let days;
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        days = 366;
    } else days = 365;
    console.log(days)
}

// Task 9
function task9(num) {
    let message = "";
    if (num == 0) message = "Нулевое";
    else {
        if (num > 0) message = "Положительное ";
        else message = "Отрицательное ";
        if (num % 2 == 0) message += "чётное ";
        else message += "нечётное ";
    }
    console.log(message + "число");
}

// Task 10
function task10(num) {
    let message = "";
    if (!(num >= 1 && num <= 999)) message = "Вне диапазона ";
    else {
        if (num % 2 == 0) message = "четное ";
        else message = "нечетное ";
        if (num > 99) message += "трехзначное ";
        else if ((99 >= num) & (num > 9)) message += "двузначное ";
        else if (num <= 9) message += "однозначное ";
    }
    console.log(message + "число");
}

// Task 11
// Префиксный вариант выведет значения от 1 до 4 (сначала увеличение, потом сравнение), постфиксный - от 1 до 5, так как сначала сравнение, а потом только увеличение и переход к следующей итерации.

// Task 12
// И постфиксная и префиксная форма вернут значения от 0 до 4, так как для проверки условия используется значение для старта исходя из результата предыдущей итерации.

// Task 13
function task13() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// Task 14
function task14() {
    let i = 0;
    while (i < 3) {
        console.log(`number ${i}!`);
        i++;
    }
}

// Task 15
function task15() {
    let num;
    do {
        num = prompt("Введите число, большее 100?", 0);
    } while (num <= 100 && num);
}

// Task 16
function task16(n) {
    outer:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue outer;
        }
        console.log(i);
    }
}

// Task 17
function task17(a, b) {
    let res = (a + b) / 2;
    console.log(res);
}

// Task 18
function task18(num) {
    let res = Math.pow(num, 2);
    console.log(res)
}

// Task 19
function task19(a, b, c) {
    let min, max;
    min = Math.min(a, b, c);
    max = Math.max(a, b, c);
    console.log(max - min);
}

// Task 20
function task20() {
    let res = prompt('Введите число');
    if (res != null && res % 2 == 0) {
        console.log(`${res} - четное число`);
    } else {
        console.log(`${res} - нечетное число`);
    }
}

// Task 21
function task21(a) {
    let count, sum;
    count = a < 10 ? 1 : 2;
    sum = a < 10 ? (a % 10) : (a % 10 + Math.floor(a / 10));
    console.log(`Кол-во цифр: ${count} , Сумма цифр: ${sum}`)
}

// Task 22
function task22() {
    let value = prompt('Введите число, которое нужно конвертировать', 0);
    let option = prompt('Введите 1, если хотите перевести дюймы в сантиметры или введите 2, чтобы перевести сантиметры в дюймы');
    let res;
    switch (option) {
        case '1':
            res = +value * 2.54;
        case '2':
            res = +value / 2.54;
    }
    console.log(res)
}

// Task 23
function task23() {
    let score = 0;
    alert("Здравствуйте! \nВас приветствует программа “Кто хочет стать миллионером?”.\nЖелаем удачи, игра началась!!!");

    let answer1 = prompt("Вопрос 1: Что из перечисленного в дословном переводе означает терпение? \na - Преферанс\nb - Пасьянс\nc - Бридж\nd - Покер \nВведите букву с Вашим ответом:\n");
    switch (answer1) {
        case 'a':
            alert('Неправильный ответ!')
        case 'b':
            alert('Это правильный ответ! Поздравляем, вы выиграли 1000 кредитов');
            score = 1000;
            break;
        case 'c':
            alert('Неправильный ответ!');
        case 'd':
            alert('Неправильный ответ!');
        default:
            alert('Нет таких вариантов ответа!');
    }

    let answer2 = prompt("Вопрос 2: Кто из куриных является перелётной птицей? \na - Фазан\nb - Павлин\nc - Индейка\nd - Перепел \nВведите букву с Вашим ответом:\n");
    switch (answer2) {
        case 'a':
            alert('Неправильный ответ!')
        case 'b':
            alert('Неправильный ответ!');
        case 'c':
            alert('Неправильный ответ!');
        case 'd':
            alert('Это правильный ответ! Поздравляем, вы выиграли 5000 кредитов. На очереди финальный вопрос ценой в 10000 кредитов!');
            score += 5000;
            break;
        default:
            alert('Нет таких вариантов ответа!');
    }

    let answer3 = prompt("Вопрос 3: Какой жук считался в Древнем Египте священным?\na - Могильщик\nb - Носорог\nc - Скарабей\nd - Сизиф \nВведите букву с Вашим ответом:\n");
    switch (answer3) {
        case 'a':
            alert('Неправильный ответ!')
        case 'b':
            alert('Неправильный ответ!');
        case 'c':
            alert('Это правильный ответ! Поздравлякм, вы выиграли 10000 кредитов.');
            score += 10000;
            break;
        case 'd':
            alert('Неправильный ответ!');
        default:
            alert('Нет таких вариантов ответа!');
    }

    alert(`Поздравлем, игра окончена! Ваш выигрыш составляет ${score} кредитов!`)
}

// Task 24
function task24() {
    let num = +prompt('Введите трехзначное число.');
    let res;
    a = Math.trunc(num / 100);
    b = Math.trunc((num % 100) / 10);
    c = Math.trunc(num % 10);
    if (num != null && num % 2 == 0) {
        res = a + b + c;
        console.log(`${num} - четное число, сумма цифр - ${res}`);

    } else {
        res = a * b * c;
        console.log(`${num} - нечетное число, произведение цифр - ${res}`);
    }
}

// Task 25
function task25() {
    let a = +prompt('Введите длину первой стороны треугольника', 0);
    let b = +prompt('Введите длину второй стороны треугольника', 0);
    let c = +prompt('Введите длину третьей стороны треугольника', 0);
    if (a + b > c && a + c > b && b + c > a) {
        console.log("Треугольник существует")
    } else console.log("Треугольник не существует");
}

// Task 26
function task26() {
    const x = 4;
    const y = 9;
    const R = 10;
    let h = Math.sqrt(x * x + y * y);
    if (h > R) console.log('Точка находится за пределами окружности');
    else console.log('Точка лежит внутри окружности');
}

// Task 27
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 28
// Будет, так как константа user хранит ссылку на объект, но меняется не сам объект, а его содержимое.

// Task 29
function task29() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }  
    console.log(sum);
}

//Task 30
// Цикл никогда не завершится, так как из-за потери точности i в проверке никогда не станет равным 10.