'use strict';

let value = 0;

const raise_value = () => {
    value++;

    if (value > 10) {
        value = 10;
    }

    display_value();
}

const lower_value = () => {
    value--;

    if (value < 0) {
        value = 0;
    }

    display_value();
}

/**
 * take the current value
 * and reflect it in the HTML code
 */
const display_value = () => {
    const counter = document.querySelector('#counter');
    counter.innerText = value;

    const knob = document.querySelector('#knob');
    knob.style.width = (value * 10) + '%'; // 40%
}

const plus_button = document.querySelector('#plus');
plus_button.addEventListener('click', raise_value)

const minus_button = document.querySelector('#minus');
minus_button.addEventListener('click', lower_value)

display_value();