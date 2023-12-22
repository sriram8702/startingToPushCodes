// Write the code as shown in the video below:
const header=document.querySelector("#main-heading");
header.style.textAlign="center";
const fruits=document.querySelector(".fruits");
fruits.style.backgroundColor="gray";
fruits.style.padding="30px"
fruits.style.margin="30px"
fruits.style.width="50%"
fruits.style.borderRadius="5px"
fruits.style.listStyleType="none"
const fruititems=document.querySelectorAll(".fruit")
for(let i=0;i<fruititems.length;i++){
  fruititems[i].style.backgroundColor="white"
  fruititems[i].style.padding="10px";
  fruititems[i].style.margin="10px"
  fruititems[i].style.borderRadius="5px"
}

// Write answer to the questions asked below:
const basketheading=document.querySelector("#basket-heading");
basketheading.style.marginLeft="30px"
basketheading.style.color="brown"
const fruitodd=document.querySelectorAll(".fruit:nth-child(odd)")
for(let i=0;i<fruitodd.length;i++){

  fruitodd[i].style.backgroundColor="lightgrey"
  }
const fruiteven=document.querySelectorAll(".fruit:nth-child(even)")
for(let i=0;i<fruiteven.length;i++){
  fruiteven[i].style.color="white"
  fruiteven[i].style.backgroundColor="brown"
}