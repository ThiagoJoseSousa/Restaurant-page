
import { initialPageLoad } from "./dist/main.js";
import { menuInitialize } from "./dist/menu.js";
import { contactInitialize } from "./dist/contact.js";

function clearDom () {
    var el = document.getElementById('content');
while( el.hasChildNodes() ){
    el.removeChild(el.lastChild);
}
}

function createList() {
    let body1 =document.getElementById('body');
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    let li2=document.createElement('li');
    let li3=document.createElement('li');
    let textInitial = document.createTextNode('initial')
    let textMenu= document.createTextNode('menu')
    let textContact = document.createTextNode('contact')
li.appendChild(textInitial);
li2.appendChild(textMenu);
li3.appendChild(textContact);

    body1.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);

createEvents(li, li2, li3);
}

function createEvents (li, li2, li3) {
li.addEventListener('click', clearAndStart)
li2.addEventListener('click', clearAndMenu);
li3.addEventListener('click', clearAndContact);

}

const clearAndStart = () => {
    clearDom();
    initialPageLoad();
}
const clearAndMenu = () => {
    clearDom();
    menuInitialize();
}
const clearAndContact = () => {
    clearDom();
    contactInitialize();
}

initialPageLoad();
createList();