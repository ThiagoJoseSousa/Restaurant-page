// h1 contact us
// div with img, name, number, br, description, email
function contactInitialize()
{let container1= document.getElementById('content')

let header1=document.createElement('h1');
let h1Text=document.createTextNode('Contact us');
header1.appendChild(h1Text);

let image1= document.createElement('img');
image1.src= "../src/assets/phone.webp"
image1.setAttribute("width","100px");

let p=document.createElement('p');
let ptext=document.createTextNode('5555-5555')
p.appendChild(ptext);

container1.appendChild(header1);
container1.appendChild(image1);
container1.appendChild(p);
}
export {contactInitialize}