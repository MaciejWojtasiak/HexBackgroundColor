const button = document.querySelector('.btn-primary');
const colors = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const body = document.querySelector('body');
const span = document.querySelector('span');

function changeColor() {
    let bgcColor = "#";
    for (i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * colors.length);
        bgcColor += colors[randomNumber];
    }
    body.style.backgroundColor = bgcColor;
    span.innerHTML = bgcColor;
};


button.addEventListener('click', changeColor);