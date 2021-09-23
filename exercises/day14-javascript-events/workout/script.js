// sets the initial value of the result
let result = 0;

/**
 * sets the value of the result value and at
 * the same time updates the HTML with the result
 */
function setResult(value) {
    result = value;
    document.querySelector('.calculator__result').textContent = value;
}

/**
 * performs the calculation with the current inputs
 */
function calculate() {
    // gets the value of the input field as a number
    const value = Number(document.querySelector('.calculator__input').value);

    // calculates the new result
    const new_result = result + value;

    // saves the new result (and updates HTML)
    setResult(new_result);

    // resets the input field to 0
    document.querySelector('.calculator__input').value = 0;
}