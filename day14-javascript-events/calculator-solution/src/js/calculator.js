'use strict';

function calculator() {

    // state
    let result = '0', // result should always be treated as a string
        input = '0', // input should always be treated as a string
        memory = 0,
        operator = null,
        finished = false; // had to add this because the natural behavior of
                          // a calculator is inconsistent when "=" has been pressed
                          // in that moment, pressing any more digits or decimal
                          // point should clear the result and start over
                          // in all other cases

    const result_element = document.querySelector('.calc__result');
    const input_element = document.querySelector('.calc__input-number');
    const operator_element = document.querySelector('.calc__operator');

    const setResult = (value) => {
        result = String(value); // not converting to number
                                // to preserve decimal point at the end
        result_element.textContent = result.substr(0, 10);
    }

    const appendToResult = (value) => {
        setResult((result !== '0' ? result : '') + String(value));
    }

    const setInput = (value) => {
        input = String(value); // not converting to number
                               // to preserve decimal point at the end
        input_element.textContent = value;
    }

    const digitPressed = (value) => {
        if (operator === null) {
            setResult(((result !== '0' && !finished) ? result : '') + String(value));
            finished = false;
        } else {
            setInput((input !== '0' ? input : '') + String(value));
        }
    }

    const decimalPressed = () => {
        if (operator === null) {
            if (Math.floor(result) !== Number(result)) {
                return false;
            }
            setResult(((finished ? null : result) || '0') + '.');
            finished = false;
        } else {
            if (Math.floor(input) !== Number(input)) {
                return false;
            }
            setInput((input || '0') + '.');
        }
    }

    const operatorPressed = (name) => {

        calculate();

        setOperator(name);
    }

    const setOperator = (name) => {
        operator = name;

        highlightOperator(name);

        let symbol = null;
        switch (name) {
            case 'plus': symbol = '+'; break;
            case 'minus': symbol = '-'; break;
            case 'multiply': symbol = '*'; break;
            case 'divide': symbol = '/'; break;
        }

        operator_element.innerHTML = symbol;
    }

    const equalsPressed = () => {

        calculate();

        setOperator(null);

        finished = true;
    }

    const highlightOperator = (name) => {
        // would be better with arrays & loops:
        document.getElementById('btn-plus').classList.remove('calc__btn--active');
        document.getElementById('btn-minus').classList.remove('calc__btn--active');
        document.getElementById('btn-multiply').classList.remove('calc__btn--active');
        document.getElementById('btn-divide').classList.remove('calc__btn--active');

        if (name) {
            document.getElementById('btn-'+name).classList.add('calc__btn--active');
        }
    }

    const clear = (value) => {
        setResult(0);
        setInput(0);
    }

    const calculate = () => {
        const input_number = Number(input); // NOW we convert the input to number
        const result_number = Number(result); // NOW we convert the input to number
        switch (operator) {
            case 'plus':
                setResult(result_number + input_number);
                break;
            case 'minus':
                setResult(result_number - input_number);
                break;
            case 'multiply':
                setResult(result_number * input_number);
                break;
            case 'divide':
                if (input_number !== 0) {
                    setResult(result_number / input_number);
                }
                break;
            default:
                setResult(result_number);
        }

        setInput(0);
    }

    const memoryPlusPressed = () => {
        memory += Number(result);
        highlightMemory();
    }

    const memoryMinusPressed = () => {
        memory -= Number(result);
        highlightMemory();
    }

    const memoryRecallPressed = () => {
        if (operator === null) {
            setResult(memory);
            finished = false;
        } else {
            setInput(memory);
        }
    }

    const memoryClearPressed = () => {
        memory = 0;
        highlightMemory();
    }

    const highlightMemory = () => {
        if (memory) {
            document.getElementById('btn-m').classList.add('calc__btn--active');
        } else {
            document.getElementById('btn-m').classList.remove('calc__btn--active');
        }
    }

    const activateButtons = () => {

        // digits
        document.getElementById('btn-0').addEventListener('click', () => digitPressed(0));
        document.getElementById('btn-1').addEventListener('click', () => digitPressed(1));
        document.getElementById('btn-2').addEventListener('click', () => digitPressed(2));
        document.getElementById('btn-3').addEventListener('click', () => digitPressed(3));
        document.getElementById('btn-4').addEventListener('click', () => digitPressed(4));
        document.getElementById('btn-5').addEventListener('click', () => digitPressed(5));
        document.getElementById('btn-6').addEventListener('click', () => digitPressed(6));
        document.getElementById('btn-7').addEventListener('click', () => digitPressed(7));
        document.getElementById('btn-8').addEventListener('click', () => digitPressed(8));
        document.getElementById('btn-9').addEventListener('click', () => digitPressed(9));

        // decimal
        document.getElementById('btn-decimal').addEventListener('click', () => decimalPressed());

        // clear button
        document.getElementById('btn-clear').addEventListener('click', clear);

        // operators
        document.getElementById('btn-plus').addEventListener('click', () => operatorPressed('plus'));
        document.getElementById('btn-minus').addEventListener('click', () => operatorPressed('minus'));
        document.getElementById('btn-multiply').addEventListener('click', () => operatorPressed('multiply'));
        document.getElementById('btn-divide').addEventListener('click', () => operatorPressed('divide'));

        // equals button
        document.getElementById('btn-equals').addEventListener('click', () => equalsPressed());

        // memory buttons
        document.getElementById('btn-mplus').addEventListener('click', () => memoryPlusPressed());
        document.getElementById('btn-mminus').addEventListener('click', () => memoryMinusPressed());
        document.getElementById('btn-m').addEventListener('click', () => memoryRecallPressed());
        document.getElementById('btn-mc').addEventListener('click', () => memoryClearPressed());
    }

    // initialization
    activateButtons();
}