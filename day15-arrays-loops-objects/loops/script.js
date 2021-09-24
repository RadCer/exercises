let number = 1;

while ( number < 10 ) {

    number++;

    if (number % 2 === 0) { // if this is an even number
        continue; // stop THIS ITERATION
    }
    // the following lines of the loop DO NOT HAPPEN for even numbers:

    document.querySelector('.while').innerHTML += `<li>${number}</li>`;

    // document.querySelector('.while').innerHTML += '<li>'+number+'</li>';

    if (number === 5) {
        break;
    }
    // the following lines of the loop DO NOT HAPPEN after reachin nr. 5

    console.log( number );
}

// execution continues here after the loop ends
console.log('Loop ended!');


let number2 = 11;

do {

    document.querySelector('.do-while').innerHTML += `<li>${number2}</li>`;

} while (number2 < 10);


// SUPER COMPLEX LOGIC START
let number3 = 10; // 100 lines of code to get this
// SUPER COMPLEX LOGIC END

while (number3 < 10) {
    // ...

    // SUPER COMPLEX LOGIC START
    let number3 = 10; // 100 lines of code to get this
    // SUPER COMPLEX LOGIC END
}

do {

    // SUPER COMPLEX LOGIC START
    let number3 = 10; // 100 lines of code to get this
    // SUPER COMPLEX LOGIC END

} while (number3 < 10);

for (let i = 0; i < 10; i++) {

    // this will be run 10 times
    document.querySelector('.for').innerHTML += `<li>${i}</li>`;

}

// i is undefined here