function handleFormSubmit(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
  const userDetails={
    username : username,
    email:email,
    phone:phone
  };
  const newli=document.createElement("li")
    newli.innerHTML=userDetails.username+" - "+userDetails.email+" - "+userDetails.phone;
   const ul=document.getElementById("ulshow");
   ul.appendChild(newli)
  localStorage.setItem(userDetails.email,JSON.stringify(userDetails) );
  }
  module.exports=handleFormSubmit;