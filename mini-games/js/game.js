import questions from './data.js';

// Header elements
const startGame = document.querySelector('.start');
const endGame = document.querySelector('.end');
const timer = document.querySelector('.timerClock');

// Status elements
const friend = document.querySelector('.friend');
const half = document.querySelector('.half');

// Questions elements
const question = document.querySelector('.questionTitle');
const answer1 = document.querySelector('.answer:first-child button');
const answer2 = document.querySelector('.answer:nth-child(2) button');
const answer3 = document.querySelector('.answer:nth-child(3) button');
const answer4 = document.querySelector('.answer:last-child button');

//Modal elements
const modalSure = document.querySelector('.sure');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const continueModal = document.querySelector('.continue');
const continueBtn = document.querySelector('.continueBtn');
const callModal = document.querySelector('.call');
const continueBtnCall = document.querySelector('.continueBtn2');



// Render Questions
let questionStatus = 1;
let correctAnswer = 0;
let clickedAnswer = null;
let bank = 0;


answer1.addEventListener('click', () => showModalSure(0));
answer2.addEventListener('click', () => showModalSure(1));
answer3.addEventListener('click', () => showModalSure(2));
answer4.addEventListener('click', () => showModalSure(3));

function renderQuestions(questionId) {
    clickedAnswer = null;
    let questionObj = questions.find(item => item.id === questionId);
    if (questionId === 0) {
        question.innerHTML = 'Чтобы увидеть вопрос нажмите "Начать игру"';
        answer1.innerHTML = 'Чтобы увидеть вариант ответа нажмите "Начать игру"';
        answer2.innerHTML = 'Чтобы увидеть вариант ответа нажмите "Начать игру"';
        answer3.innerHTML = 'Чтобы увидеть вариант ответа нажмите "Начать игру"';
        answer4.innerHTML = 'Чтобы увидеть вариант ответа нажмите "Начать игру"';
    } else {
        question.innerHTML = questionObj.question;
        answer1.innerHTML = questionObj.answers[0];
        answer2.innerHTML = questionObj.answers[1];
        answer3.innerHTML = questionObj.answers[2];
        answer4.innerHTML = questionObj.answers[3];
        correctAnswer = questionObj.rightAnswerIndex;
    }
    console.log(questionObj);
};



// Bank Status
let li = null;
let prevLi = null;

function setActiveQuestion() {
    li = document.querySelector(`.money li:nth-child(${questionStatus})`);
    prevLi = document.querySelector(`.money li:nth-child(${questionStatus - 1})`) || document.querySelector(`.money li:first-child`);
    li.classList.add('active');
    prevLi !== li ? prevLi.classList.remove('active') : null;
}

function garantBank() {
    if (questionStatus == 6) bank = 1000;
    else if (questionStatus == 11) bank = 32000;
    else if (questionStatus == 15) bank = 1000000;
    else bank;
}



// Modals
no.addEventListener('click', () => noSure());
yes.addEventListener('click', () => yesSure());
continueBtn.addEventListener('click', () => nextQuestion());

function showModalSure(answerId) {
    clickedAnswer = answerId;
    modalSure.style.display = "block";
}

function yesSure() {
    garantBank();
    console.log(bank)
    let isRight = clickedAnswer == correctAnswer ? true : false;
    console.log(isRight)
    if (isRight) {
        continueModal.style.display = 'block';
        soundClick('./../sounds/correct_answer.mp3');
    } else {
        continueModal.style.display = 'block';
        continueModal.querySelector('h2').innerHTML = `Это неправильный ответ! <br> Конец игры!<br> Ваш выигрыш составляет ${bank}$. <br> Обновите страницу, чтобы попробовать снова.`;
        continueModal.querySelector('.modal-footer').outerHTML = "";
        friend.disabled = true;
        half.disabled = true;
        startGame.disabled = true;
        endGame.disabled = true;
        resetTimer();
    }
}

function noSure() {
    modalSure.style.display = "none";
}



// Help
function callFriend() {
    let randomAnswer = generateRandomAnswer();
    callModal.style.display = 'block';
    callModal.querySelector('h2').innerHTML = `Хммм.....Я думаю, это вариант ${randomAnswer}`
    friend.disabled = true;
    friend.classList.add('wasted');
}

continueBtnCall.addEventListener('click', () => callModal.style.display = 'none');


function generateRandomAnswer() {
    let num = (Math.floor(Math.random() * 4));
    switch (num) {
        case 0: return "A";
        case 1: return "B";
        case 2: return "C";
        case 3: return "D";
    }
}

half.addEventListener('click', () => fiftyFifty());

function fiftyFifty() {
    let indexArray = [0, 1, 2, 3];
    let answersToRemove = indexArray.filter(item => item !== correctAnswer).splice(0, 2);
    answersToRemove.forEach(answer => {
        console.log(answer);
        if (answer == 0) answer1.style.opacity = '0.2';
        if (answer == 1) answer2.style.opacity = '0.2';
        if (answer == 2) answer3.style.opacity = '0.2';
        if (answer == 3) answer4.style.opacity = '0.2';
    });
    half.disabled = true;
    half.classList.add('wasted');
}

function clearStyles() {
    answer1.style.opacity = '1';
    answer2.style.opacity = '1';
    answer3.style.opacity = '1';
    answer4.style.opacity = '1';
}


// Audio
function soundClick(src) {
    const audio = new Audio();
    audio.src = src;
    audio.autoplay = true;
}


// Timer
let timeLeft = null;
let seconds = 60;

function startCountDown() {
    timeLeft = setInterval(() => {
        seconds--;
        setSeconds()
        if (seconds <= 0) {
            endQuiz()
        }
    }, 1000)
}

function setSeconds() {
    timer.innerHTML = `${seconds} c`;
}

function resetTimer() {
    clearInterval(timeLeft);
    seconds = 60;
    setSeconds();
}



// Quiz Status
function startQuiz() {
    questionStatus = 1;
    startCountDown();
    startGame.disabled = true;
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
    half.disabled = false;
    renderQuestions(1);
    setActiveQuestion();
    friend.addEventListener('click', () => callFriend());
    soundClick('./../sounds/start.mp3')
}

function nextQuestion() {
    modalSure.style.display = "none";
    continueModal.style.display = 'none';
    resetTimer()
    questionStatus++;
    if (questionStatus > 15) {
        soundClick('./../sounds/you_won_million.mp3');
        continueModal.style.display = 'block';
        continueModal.querySelector('h2').innerHTML = `Поздравляем! <br> Вы получаете ${bank}$!`;
        continueModal.querySelector('.modal-footer').outerHTML = ""; 
        resetTimer() 
    } else {
        renderQuestions(questionStatus);
    }
    clearStyles();
    startCountDown();
    setActiveQuestion();

}

function endQuiz() {
    soundClick('./../sounds/wrong_answer.mp3');
    startGame.disabled = true;
    garantBank();
    continueModal.style.display = 'block';
    continueModal.querySelector('h2').innerHTML = `Игра окончена! <br> Ваш выигрыш составляет ${bank}$. <br> Обновите страницу, чтобы попробовать снова.`;
    continueModal.querySelector('.modal-footer').outerHTML = "";
    li.classList.remove('active');
    questionStatus = 0;
    resetTimer();
    modalSure.style.display = "none";
    clearStyles();
    friend.classList.remove('wasted');
    half.classList.remove('wasted');
    garantBank();
    renderQuestions(0);
}


startGame.addEventListener('click', () => startQuiz());
endGame.addEventListener('click', () => endQuiz());

