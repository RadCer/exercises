document.body.innerHTML += `<h1>Hello, world!</h1>`;

setTimeout(() => {
    document.querySelector('h1').innerHTML = 'After 2s';
}, 2000);