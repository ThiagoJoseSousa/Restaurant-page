import { contactInitialize } from "./contact.js";
import{ menuInitialize} from "./menu.js"
function initialPageLoad () {
let content=document.getElementById("content");
let header=document.createElement('h1');

let image= document.createElement('img');
image.setAttribute("src", "../src/assets/RestaurantSim_screenshot_3.jpg");
image.setAttribute("alt", "Minecraft restaurant");

let paragraph= document.createElement('p');
let text = document.createTextNode("Here we give imortality totem as a bonus! Come eat and live another life!");
let headerText= document.createTextNode("THE RESTAURANT THAT REVIVES PEOPLE!")
paragraph.appendChild(text);
header.appendChild(headerText);

content.appendChild(header);
content.appendChild(image);
content.appendChild(paragraph);
}
initialPageLoad();