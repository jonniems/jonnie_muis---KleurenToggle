const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const homeBtn = document.querySelector('ul>li:nth-child(1)')
const redBtn = document.querySelector('ul>li:nth-child(2)');
const blueBtn = document.querySelector('ul>li:nth-child(3)');
const greenBtn = document.querySelector('ul>li:nth-child(4)');
const yellowBtn = document.querySelector('ul>li:nth-child(5)');

//Open/Close Hamburger Menu in JavaScript met hover. Alleen werkt het volgens mij beter als/makkelijker in CSS, vandaar uitgecomment
/*
const openHamburger = () => {
    menu.classList.add('show');
};
const closeHamburger = () => {
    menu.classList.remove('show');
};

hamburger.parentNode.addEventListener('mouseover', openHamburger);
hamburger.addEventListener('mouseout', closeHamburger);
*/

//Change Colors Functions
const backgroundHome = () => {
    menu.parentNode.parentNode.classList.remove('red', 'blue', 'green', 'yellow');
    menu.parentNode.classList.remove('hamburger-menu');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = true;
    redBtn.firstElementChild.checked = false;
    blueBtn.firstElementChild.checked = false;
    greenBtn.firstElementChild.checked = false;
    yellowBtn.firstElementChild.checked = false;
    document.getElementById("text-colour").innerHTML = "Home"
};

const backgroundRed = () => {
    menu.parentNode.parentNode.classList.add('red');
    menu.parentNode.parentNode.classList.remove('blue', 'green', 'yellow');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = false;
    redBtn.firstElementChild.checked = true;
    blueBtn.firstElementChild.checked = false;
    greenBtn.firstElementChild.checked = false;
    yellowBtn.firstElementChild.checked = false;
    document.getElementById("text-colour").innerHTML = "Red"
};
const backgroundBlue = () => {
    menu.parentNode.parentNode.classList.add('blue');
    menu.parentNode.parentNode.classList.remove('red', 'green', 'yellow');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = false;
    redBtn.firstElementChild.checked = false;
    blueBtn.firstElementChild.checked = true;
    greenBtn.firstElementChild.checked = false;
    yellowBtn.firstElementChild.checked = false;
    document.getElementById("text-colour").innerHTML = "Blue"
};
const backgroundGreen = () => {
    menu.parentNode.parentNode.classList.add('green');
    menu.parentNode.parentNode.classList.remove('blue', 'red', 'yellow');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = false;
    redBtn.firstElementChild.checked = false;
    blueBtn.firstElementChild.checked = false;
    greenBtn.firstElementChild.checked = true;
    yellowBtn.firstElementChild.checked = false;
    document.getElementById("text-colour").innerHTML = "Green"
};
const backgroundYellow = () => {
    menu.parentNode.parentNode.classList.add('yellow');
    menu.parentNode.parentNode.classList.remove('blue', 'green', 'red');
    menu.classList.add('hide');
    homeBtn.firstElementChild.checked = false;
    redBtn.firstElementChild.checked = false;
    blueBtn.firstElementChild.checked = false;
    greenBtn.firstElementChild.checked = false;
    yellowBtn.firstElementChild.checked = true;
    document.getElementById("text-colour").innerHTML = "Yellow"
};

//Trigger functions with mouse click
homeBtn.addEventListener('click', backgroundHome);
redBtn.addEventListener('click', backgroundRed);
blueBtn.addEventListener('click', backgroundBlue);
greenBtn.addEventListener('click', backgroundGreen);
yellowBtn.addEventListener('click', backgroundYellow);

//Trigger functions with keys
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit1') {
        backgroundHome();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit2') {
        backgroundRed();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit3') {
        backgroundBlue();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit4') {
        backgroundGreen();
    }
});
document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit5') {
        backgroundYellow();
    }
});

//Remove 'hide' class from Hamburger Menu and put back 'hamburger-menu'
const removeHide = () => {
    menu.classList.remove('hide');
}
hamburger.parentNode.addEventListener('mouseover', removeHide);

const resetHamburger = () => {
    menu.parentNode.classList.add('hamburger-menu');
}
hamburger.parentNode.addEventListener('mouseout', resetHamburger);