const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

function ballMove(e) {
    let fieldCoordinates = field.getBoundingClientRect();
    let ballCoordinates = {
        top: e.clientY - fieldCoordinates.top - field.clientTop - ball.clientHeight / 2,
        left: e.clientX - fieldCoordinates.left - field.clientLeft - ball.clientWidth / 2,
    }

    if (ballCoordinates.top < 0) ballCoordinates.top = 0;
    if (ballCoordinates.left < 0) ballCoordinates.left = 0;
    if (ballCoordinates.left + ball.clientWidth > field.clientWidth) {
        ballCoordinates.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoordinates.top + ball.clientHeight > field.clientHeight) {
        ballCoordinates.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = `${ballCoordinates.left}px`;
    ball.style.top = `${ballCoordinates.top}px`;
}

field.addEventListener('click', (e) => ballMove(e))