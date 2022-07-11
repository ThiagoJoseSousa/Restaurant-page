
import { initialPageLoad } from "../dist/main";
import { menuInitialize } from "../dist/menu";
import { contactInitialize } from "../dist/contact";

function clearDom () {
    var el = document.getElementById('content');
while( el.hasChildNodes() ){
    el.removeChild(el.lastChild);
}
}

function createList() {
    let body =document.getElementsByTagName('body');
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

//A function should only do one thing
li.addEventListener("click", initialPageLoad())


    body.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);


}

