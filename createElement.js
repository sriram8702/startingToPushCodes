
const heading=document.createElement("h3");
const text=document.createTextNode("Buy high quality organic fruits online");
heading.appendChild(text);
const divs=document.getElementsByTagName("div");
divs[0].appendChild(heading);
heading.style.fontStyle="italic";

const para=document.createElement("p");
const paratext=document.createTextNode("Total fruits:4");
para.appendChild(paratext);
const ul=document.getElementsByClassName("fruits")
divs[1].insertBefore(para,ul[0]);
para.id="fruits-total";