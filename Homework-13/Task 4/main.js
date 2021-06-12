let hider = document.querySelector('#hider');
let text = document.querySelector('#text');

function hideText() {
    text.hidden = true;
}

hider.addEventListener('click', () => hideText())