/**
 * @param selector - selector of the container element
 *                   within which the entire widget exists
 *                   IS DIFFERENT FOR EVERY CALL
 */
function pretty_checkbox(selector) {

    // use the passed-in selector (e.g. '#happy-checkbox')
    // to find the container element (e.g.
    //     <div id="happy-checkbox" class="pretty-checkbox">)
    const container = document.querySelector(selector);

    // find the first <input type="checkbox"> within the
    // container
    const checkbox = container.querySelector('input[type="checkbox"]');
    if (checkbox === null) {
        // if checkbox not found, throw a nice error message
        throw 'Checkbox not found in container with selector '+selector;
    }

    // hide the found checkbox
    checkbox.style.display = 'none';

    // find the __widget element
    const widget = container.querySelector('.pretty-checkbox__widget');

    // when the widget is clicked, add class .pretty-checkbox--on
    // to the container
    widget.addEventListener('click', () => {

        // add pretty-checkbox--on class or remove it
        container.classList.toggle('pretty-checkbox--on');

        // same as above:
        // if (container.classList.contains('pretty-checkbox--on')) {
        //     container.classList.remove('pretty-checkbox--on');
        // } else {
        //     container.classList.add('pretty-checkbox--on');
        // }

        if (container.classList.contains('pretty-checkbox--on')) {
            // if the container has pretty-checkbox--on class
            // check the checkbox
            checkbox.checked = true;
        } else {
            // otherwise uncheck the checkbox
            checkbox.checked = false;
        }
    })

    // wait 50ms after page load to reflect the current state
    // of the form (50ms in order to wait for the form to be
    // prefilled)
    setTimeout(() => {
        if (checkbox.checked === true) {
            // if the checkbox is checked, add the class pretty-checkbox--on
            // onto the container
            container.classList.add('pretty-checkbox--on');
        } else {
            // otherwise remove it
            container.classList.remove('pretty-checkbox--on');
        }
    }, 50); // do it after 50ms
}