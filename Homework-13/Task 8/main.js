const button = document.querySelector('.button');

function showCover() {
    let cover = document.createElement('div');
    cover.classList.add('cover');
    document.body.style.overflowY = 'hidden';
    document.body.append(cover);
}

function hideCover() {
    document.querySelector('.cover').remove();
    document.body.style.overflowY = '';
}

function showPrompt(text, func) {
    showCover();
    let form = document.querySelector('.form');
    let modal = document.querySelector('.modal');
    document.querySelector('.title').innerHTML = text;
    form.querySelector('input').value = '';

    function submit(value) {
        hideCover();
        modal.style.display = 'none';
        document.onkeydown = null;
        func(value);
    }

    form.onsubmit = function () {
        let value = form.querySelector('input').value;
        if (value == '') return false;

        submit(value);
        return false;
    };
    form.cancel.onclick = function () {
        submit(null);
    };

    document.onkeydown = function (e) {
        if (e.key == 'Escape') {
            submit(null);
        }
    };

    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];

    lastElem.onkeydown = function (e) {
        if (e.key == 'Tab' && !e.shiftKey) {
            firstElem.focus();
            return false;
        }
    };

    firstElem.onkeydown = function (e) {
        if (e.key == 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    };

    modal.style.display = 'block';
    form.elements.text.focus();

}

button.onclick = function() {
    showPrompt("Введите что-нибудь", function(value) {
        alert("Вы ввели: " + value);
      });
}

