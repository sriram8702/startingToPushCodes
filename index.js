const newinput=document.createElement("input");
const form=document.getElementsByTagName("form");
newinput.type="text";
newinput.id="fruitdescription"
const firstform=form[0];
const button=document.getElementsByTagName("button");

firstform.insertBefore(newinput,button[0])

const fruits=document.querySelector(".fruits")
firstform.addEventListener('submit',function(event){
  event.preventDefault();
  const fruittoadd=document.getElementById("fruit-to-add");
  const fruitdes=document.getElementById("fruitdescription");
  const newli=document.createElement("li");
  const para=document.createElement("p");
  para.innerHTML=fruitdes.value
  para.style="font-style:italic"
 
  newli.innerHTML=fruittoadd.value+ '<button class="delete-btn">x</button>'
  newli.appendChild(para)
  console.log(newli)
  fruits.appendChild(newli);
 
})

const filter=document.getElementById("filter");
filter.addEventListener('keyup',function(event){
  const textentered=event.target.value.toLowerCase();
  const fruititem=document.getElementsByClassName("fruit");
  for(let i=0;i<fruititem.length;i++){
    const currentitem=fruititem[i].firstChild.textContent.toLowerCase();
    if(currentitem.indexOf(textentered)==-1){
      fruititem[i].style.display="none";
    }
    else{
      fruititem[i].style.display="flex";
    }
  }
})

