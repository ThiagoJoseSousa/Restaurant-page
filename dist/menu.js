// h1 menu, food, div h2 golden apple p golden apple buy me mr beast
function menuInitialize() {
let container=document.getElementById('content')
let h1=document.createElement('h1');
let apple = document.createElement('img');
apple.setAttribute('src','../src/assets/golden apple.jpg');
apple.setAttribute('alt', 'Golden apple')
apple.setAttribute('width', '300px')

let text=document.createTextNode('Golden Apple');

h1.appendChild(text);
container.appendChild(h1);
container.appendChild(apple);
}

export {menuInitialize}