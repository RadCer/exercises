const elementFromHTML = (html) => {
    const div = document.createElement('div');
    // <div></div>
    div.innerHTML = html;
    // <div><h2 class="secondary-element" style="color: green">
    //     Hello, again
    //     <span>World</span>
    // </h2></div>
    return div.firstChild;
}

const container = document.querySelector('.container');

const button = document.querySelector('.click-me');
button.addEventListener('click', () => {
    alert('Hello');
})

// destroys all elements and creates them again:
// container.innerHTML = container.innerHTML + '<h1 class="main-title">Hello</h1>';

const h1_element = document.createElement('h1');
h1_element.innerText = 'Hello, world';
h1_element.classList.add('main-title');
h1_element.addEventListener('click', () => {
    alert('TITLE clicked');
})
h1_element.style.color = 'red';
console.log(h1_element);

// appendChild
// appends to the end of container
container.appendChild(h1_element);

// insertBefore
// inserts inside a container just before another element
container.insertBefore(h1_element, button);

container.removeChild(button);

h1_element.classList.add('clickable');


const h2 = elementFromHTML(`<h2 class="secondary-element" style="color: green">
        Hello, again
        <span>World</span>
    </h2>`);

console.log( h2 );
h2.addEventListener('click', () => {
    alert('H2 clicked');
})
h2.classList.add('current-headline');

container.appendChild(h2);


console.log( container.innerHTML );