// when I click the plus button
// the bar moves to 50% and
// the counter updates to 5/10


// find all the elements that we are going to use
// later just for convenience
const plus_button = document.querySelector('#plus');
const minus_button = document.querySelector('#minus');
const knob = document.querySelector('#knob');
const counter = document.querySelector('#counter');
const bar = document.querySelector('.bar');

let current_value = 4;

// when I click the plus button
plus_button.addEventListener(

    'click',

    () => {

        raise_value();
    }

)

// when I click the minus button
minus_button.addEventListener('click', () => {
    lower_value();
})

const update_html = () => {
    // the bar moves to 30%
    knob.style.width = current_value * 10 + '%'; // '30%'

    // the counter updates to 3/10
    counter.innerText = current_value;
}

const raise_value = () => {
    current_value++;

    if (current_value > 10) {
        current_value = 10;
    }

    update_html();
}

const lower_value = () => {
    current_value--;

    if (current_value < 0) {
        current_value = 0;
    }

    update_html();
}


// when the user presses the + on their keyboard
document.addEventListener('keyup', (event) => {

    if (event.key === '+') {
        raise_value();
    }

    if (event.key === '-') {
        lower_value();
    }

})

// origin of my mousedown
let mousedownX = null;
let mousedownY = null;

bar.addEventListener('mousedown', (event) => {

    // remember where the mousedown event happened
    mousedownX = event.clientX;
    mousedownY = event.clientY;
})

document.addEventListener('mousemove', (event) => {

    // if not in the process of dragging, stop
    if (mousedownX === null) {
        return;
    }

    // find where the mouse is now


    // compare it with the beginning of the mousedown event
    // that we remembered earlier
    const Xmovement = event.clientX - mousedownX;
    const Ymovement = event.clientY - mousedownY;

    // reflect that in the knob's size

    // TODO:
    // knob.style.width = Xmovement + 'px';
    current_value = Math.round(Xmovement / 30);
    update_html();
})

document.addEventListener('mouseup', () => {

    // stop dragging, forget origin of mousedown event
    mousedownX = null;
    mousedownY = null;
})