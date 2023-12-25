
function handleFormSubmit(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
  const userDetails={
    username,
    email,
    phone
  };

  localStorage.setItem(userDetails.email,JSON.stringify(userDetails) );
  showUserOnScreen(userDetails);
  
  }
  function showUserOnScreen (userDetails){
    const parentElem = document.getElementById('listOfItems');
    const childElem = document.createElement('li') ;
    childElem.textContent = userDetails.username +" - "+ userDetails.email+" - "+userDetails.phone;
    const deleteButton = document.createElement('input') ;
    deleteButton.type = "button";
    deleteButton.value = 'Delete' ;
    deleteButton.onclick= () => {
    localStorage.removeItem(userDetails.email)
    parentElem.removeChild (childElem)
    }
    const editButton = document.createElement('input') ;
    editButton.type = "button";
    editButton.value = 'Edit' ;
    editButton.onclick= () => {
    const u_name=document.getElementById("username");
    const u_email=document.getElementById("email");
    const u_phone=document.getElementById("phone");
   u_name.value=userDetails.username;
   u_email.value=userDetails.email;
   u_phone.value=userDetails.phone;


    localStorage.removeItem(userDetails.email);
    parentElem.removeChild (childElem);
    }
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);

    }