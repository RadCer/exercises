// state of the system:
let padlock_clicked = false; // is the padlock clicked?

// find the padlock on the page
const padlock = document.querySelector('.padlock');

// when the padlock is being entered with a mouse
padlock.addEventListener('mouseenter', () => {

    if (padlock_clicked) {
        return; // end the execution of the function here
                // == no more statements will be executed
    }

    // find the text element
    const text = document.querySelector('.text');

    // display the text
    // == add .text--visible class to it
    text.classList.add('text--visible');

})

// when the padlock is left with the mouse
padlock.addEventListener('mouseleave', () => {

    if (!padlock_clicked) {

        // find the text element
        const text = document.querySelector('.text');

        // hide the text
        // == remove .text--visible from it\
        text.classList.remove('text--visible');

    }

})

// when the lock is clicked
padlock.addEventListener('click', () => {

    // change how it looks
    padlock.classList.toggle('padlock--clicked');

    // keep the information that it has been clicked
    // so that other functions can know about it
    padlock_clicked = !padlock_clicked; // toggle the value
                                        // of padlock_clicked
                                        // between true and false

})


// const container = document.querySelector('.container');
// container.addEventListener('mouseenter', (event) => {

//     if (padlock_clicked) {
//         event.stopPropagation();
//     }

// }, true);

// container.addEventListener('mouseleave', (event) => {

//     if (padlock_clicked) {
//         event.stopPropagation();
//     }

// }, true);