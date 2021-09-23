document.querySelector('.show-modal').addEventListener('click', (event) => {
    document.querySelector('.modal').classList.remove('modal--hidden');
})

document.querySelector('.modal__overlay').addEventListener('click', (event) => {
    document.querySelector('.modal').classList.add('modal--hidden');
})

document.querySelector('.modal__window').addEventListener('click', (event) => {
    // don't let the click event propagate to modal__overlay
    event.stopPropagation();
});


document.querySelector('.modal__button-affirmative').addEventListener('click', (event) => {
    // <button>
    event.target.style.backgroundColor = 'green';
});


document.body.addEventListener('click', (event) => {
    console.log('Body was clicked');
})


// somewhere else
// when button is clicked, add light green background
// to the modal
document.querySelector('.modal__button-affirmative').addEventListener('click', () => {
    document.querySelector('.modal__window').style.backgroundColor = 'lightgreen';
});


// somewhere else
// when button is clicked, add round corners to the modal
// and close it after 2s
document.querySelector('.modal__button-affirmative').addEventListener('click', () => {
    document.querySelector('.modal__window').style.borderRadius = '1em';

    setTimeout(() => {
        document.querySelector('.modal').classList.add('modal--hidden');
    }, 2000);
});

document.querySelector('.bg-select').addEventListener('change', (event) => {
    //                                      <select>
    document.body.style.backgroundColor = event.target.value;
})