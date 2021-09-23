function prettyCheckbox(selector) {

    let on = false;

    const container = document.querySelector(selector);
    const widget = container.querySelector('.pretty-checkbox__widget');
    const checkbox = container.querySelector('input[type="checkbox"]');

    const toggle = () => {
        on = !on; // toggles the value true <=> false

        showState();
        changeCheckbox();
    }

    const showState = () => {
        if (on) {
            container.classList.add('pretty-checkbox--on');
        } else {
            container.classList.remove('pretty-checkbox--on');
        }
    }

    const activateWidget = () => {
        widget.addEventListener('click', toggle);
    }

    const changeCheckbox = () => {
        checkbox.checked = on;
    }

    const loadCurrentState = () => {
        on = checkbox.checked;

        showState();
    }

    // initialization
    loadCurrentState();
    activateWidget();
}