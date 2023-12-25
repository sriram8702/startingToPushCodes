
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
    const parentElem = document.getElementById('listOfitems')
    const childElem = document.createElement('li') 
    childElem.textContent = userDetails.username +" - "+ userDetails.email+" - "+userDetails.phone;
    const deleteButton = document.createElement('input') ;
    deleteButton.type = "button"
    deleteButton.value = 'Delete' 
    deleteButton.onclick= () => {
    localStorage.removeItem(userDetails.email)
    parentElem.removeChild (childElem)
    }
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)
    
    }