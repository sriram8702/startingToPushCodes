function handleFormSubmit(event){
    event.preventDefault();
    const amount = document.getElementById("text").value;
    const description = document.getElementById("text2").value;
    const category = document.getElementById("text3").value;
  
  const userDetails={
    amount,
    description,
    category
  };

  localStorage.setItem(userDetails.description,JSON.stringify(userDetails) );
  showUser(userDetails);
  const form = document.getElementById('yourFormId'); // Replace 'yourFormId' with the actual ID of your form

}
 window.onload= function (){
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const storedData = localStorage.getItem(key);
  
    
    if (storedData) {
    
    const parsedData = JSON.parse(storedData);
  
    
    const parentElem = document.getElementById('listOfItems');
    const childElem = document.createElement('li') ;
    
    childElem.textContent = parsedData.amount+" - "+ parsedData.description+" - "+parsedData.category;
    const deleteButton = document.createElement('input') ;
    deleteButton.type = "button";
    deleteButton.value = 'Delete' ;
    deleteButton.addEventListener('click', function () {
      localStorage.removeItem(key);
      parentElem.removeChild(childElem);
    });
    
    const editButton = document.createElement('input') ;
    editButton.type = "button";
    editButton.value = 'Edit' ;
    editButton.onclick= () => {
    let am = document.getElementById("text");
    let des = document.getElementById("text2");
    let cat = document.getElementById("text3");
    am.value=parsedData.amount;
    des.value=parsedData.description;
    cat.value=parsedData.category;
  
    
      localStorage.removeItem(key);
      parentElem.removeChild (childElem);
      }

    
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);

      
    }
  }
}
function showUser(userDetails){
  const parentElem = document.getElementById('listOfItems');
  const childElem = document.createElement('li') ;
  
  childElem.textContent = userDetails.amount+" - "+ userDetails.description+" - "+userDetails.category;
  const deleteButton = document.createElement('input') ;
  deleteButton.type = "button";
  deleteButton.value = 'Delete' ;
  deleteButton.onclick= () => {
  localStorage.removeItem(userDetails.description)
  parentElem.removeChild (childElem)
  }
  const editButton = document.createElement('input') ;
  editButton.type = "button";
  editButton.value = 'Edit' ;
  editButton.onclick= () => {
  let am = document.getElementById("text");
  let des = document.getElementById("text2");
  let cat = document.getElementById("text3");
  am.value=userDetails.amount;
  des.value=userDetails.description;
  cat.value=userDetails.category;


  localStorage.removeItem(userDetails.description);
  parentElem.removeChild (childElem);
  }
  childElem.appendChild(deleteButton);
  childElem.appendChild(editButton);
  parentElem.appendChild(childElem);
  let am = document.getElementById("text");
  let des = document.getElementById("text2");
  let cat = document.getElementById("text3");
  am.value='';
  des.value='';
  cat.value='';

  }
  