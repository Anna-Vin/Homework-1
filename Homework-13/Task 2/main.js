const field = document.querySelector('#field');

let coordinates = field.getBoundingClientRect();

let corner1 = [coordinates.left, coordinates.top];
let corner2 = [coordinates.right, coordinates.bottom];
let corner3 = [coordinates.left + field.clientLeft, coordinates.top + field.clientWidth];
let corner4 = [coordinates.left + field.clientLeft, coordinates.top + field.clientHeight];
