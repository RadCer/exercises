const bg_button = document.querySelector('.change-bg-to-red-button');

const changeBackground = (event) => {
    console.log(event);
    document.body.style.backgroundColor = 'red';
}

const changeBackgroundToYellow = (event) => {
    document.body.style.backgroundColor = 'yellow';
}

const createChangeBackgroundFunction = () => {

    return () => {
        document.body.style.backgroundColor = 'blue';
    }

}

bg_button.addEventListener('click', changeBackground);

bg_button.addEventListener('mouseover', changeBackground);
bg_button.addEventListener('mouseout', changeBackgroundToYellow);


const my_function = () => {
    return 'return value';
}

console.log( my_function );
// is equivalent to:
console.log( () => {
    return 'return value';
} );


console.log( my_function() );
// is equivalent to:
console.log( 'return value' );


document.addEventListener('keyup', (event) => {

    console.log(event.code);


})


document.querySelector('.google-link').addEventListener('click', (event) => {
    event.preventDefault();
    alert('You don\'t need google')
    console.log('Google link clicked');
})

// document.querySelector('.show-form-hint').addEventListener('click', (event) => {
//     console.log(event);
//     event.preventDefault();
//     document.querySelector('form').innerHTML += '<div class="hint">This is the hint</div>';

// });