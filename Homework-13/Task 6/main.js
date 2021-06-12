const sweets = document.querySelector('.sweets');
const button= document.querySelector('.button');

button.addEventListener('click', () => toggleListShow());

function toggleListShow() {
    sweets.classList.toggle('open')
}