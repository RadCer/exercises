const month_days = [
    31, // 0
    28, // 1
    31, // 2
    30, // 3
    31, 30, // 4, 5
    31, 31, // 6, 7
    30, // index 8 - september
    31, 30, 31
];

console.log( month_days[8] ); // september's days

const names = []; // empty array
names[0] = 'Jack';
names[1] = 'John';

names.push('Jill');
names.unshift('Peter');

names[2] = 'Kevin';

console.log( names[2] );

if (names[2] == 'Kevin') {
    console.log('It is Kevin!');
}

names[2] = 'Bob';

names.splice(
    2, // index where to begin (where I want the inserted element)
    1, // how many elements at that position should be removed
    'Stuart', // what should be inserted into that place
    'Arthur', // another one to insert there
    'Wanda'   // another one ...
);

const last_name = names.pop();
console.log( last_name );

const first_name = names.shift();
console.log( first_name );

//                             4
const last_name2 = names[ names.length - 1 ];
console.log( last_name2 );

const first_name2 = names[0];
console.log( first_name2 );

console.log( 'Nr. of elements in names:', names.length );
console.log( names );



const fruits = ['apple', 'pear', 'banana', 'orange', 'mango'];
const list = document.querySelector('.fruit');

for (let i = 0; i < fruits.length; i++) {

    list.innerHTML += `<li>${fruits[i]}</li>`;

}


fruits.forEach((element, index) => {
    // return; // equivalent of continue
    list.innerHTML += `<li>${index}. ${element}</li>`;

})

// true && true && false
const every_function_returned_true = fruits.every((element, index) => {
                                        if (element === 'banana') {
                                            return false;
                                        }

                                        return true;
                                     })

// false || false || true
const some_function_returned_true = fruits.some((element, index) => {
                                         if (element === 'banana') {
                                             return true;
                                         }

                                         // return void; // - automatic, falsy value
                                     })


// map
const array_of_return_values = fruits.map((value, i) => {
    return `<li>${value}</li>`;
})

console.log( array_of_return_values );

// ['apple', 'pear', 'banana', 'orange', 'mango'];
const vegetables = ['potatoes', 'tomatoes', 'carrots'];
const merged_array = fruits.concat(vegetables);

console.log( merged_array );
console.log( fruits );
console.log( vegetables );


const numbers = [0, 1, 2, 3, 4, 5, 6];

const even_numbers = numbers.filter(

    (number, index) => {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

)

console.log( even_numbers );


const index_of_orange = fruits.indexOf('orange');

console.log( index_of_orange );

const index_of_apricot = fruits.indexOf('apricot');

console.log( index_of_apricot );

if (-1 === fruits.indexOf('apricot')) {
    console.log('Apricot is not in the array');
}

if (-1 !== fruits.indexOf('pear')) {
    console.log('Pear is in the array');
}

const vegetables_string = vegetables.join('|');

console.log( vegetables_string );


const vegetables_list = document.querySelector('.vegetables');

let html = '<li class="vegetable" data-eaten="no">' + vegetables.join('</li><li class="vegetable" data-eaten="no">') + '</li>';

vegetables_list.innerHTML = html;

vegetables_list.innerHTML =

    vegetables.filter((vegetable) => { // filter out tomatoes (return true for everything else, false for tomatoes)
        return vegetable !== 'tomatoes';
    })
    .map((vegetable) => { // create an array of <li>s (one returned for every element in vegetables without tomatoes)
        return '<li class="vegetable" data-eaten="no">' + vegetable + '</li>';
    })
    .join('') // join the array of <li>s together with nothing in between, forming one big HTML string
