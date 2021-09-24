const currencies_array = [
    'CZK', // 0
    'EUR', // 1
    'USD'  // 2
];

const currencies_object = {

    'CZK': 1,
    'EUR': 25.3,
    'USD': 21.1

};

console.log('Dollar is today ', currencies_object.USD, ' Czech Crowns')
console.log('Euro is today ', currencies_object['EUR'], ' Czech Crowns')


let shoppingCart = {
    total: {
        amount: 91.6,
        currency: 'CZK'
    },
    items: [
        {
            name: 'Apples',
            amount: '2kg',
            price: 62.6
        },
        {
            name: 'Cinnamon',
            amount: 1,
            price: 29
        }
    ]
}

console.log( shoppingCart.items[0].amount )

const currencies_list = document.querySelector('.currencies');

const currencies = {

    'CZK': 1,
    'EUR': 25.3,
    'USD': 21.1

};

for (let key in currencies) {
    console.log(key); // EUR

    const value = currencies[key];
    console.log( value );

    currencies_list.innerHTML += `<li>${key} ... ${value} CZK</li>`;
}


let shoppingCart2 = {
    total: {
        amount: 91.6,
        currency: 'CZK'
    },
    items: [
        {
            name: 'Apples',
            amount: 2,
            price: 62.6
        },
        {
            name: 'Cinnamon',
            amount: 1,
            price: 29
        },
        {
            name: 'Bananas',
            amount: 3,
            price: 39
        }
    ]
}


const total_amount = shoppingCart2.items.map(item => {
    return item.amount;
})
.reduce((prev_value, value) => {
    return prev_value + value;
})


console.log( total_amount );


console.log( Object.keys(currencies) );
console.log( Object.values(currencies) );

const json_string = '{"total":{"amount":91.6,"currency":"CZK"},"items":[{"name":"Apples","amount":"2kg","price":62.6},{"name":"Cinnamon","amount":1,"price":29}]}';

const data_from_json = JSON.parse(json_string);

console.log( data_from_json.items[0].amount );

console.log( JSON.stringify({
    "status":"success",
    "message": "Item succesfully created",
    "payload": {
        "id": 1
    }
}) );