function submitForm() {
  let name, email, password;
  name = document.forms.myForm.elements.first_name.value;
  password = document.forms.myForm.elements.password.value;
  email = document.forms.myForm.elements.email.value;
  user_data = JSON.parse(localStorage.getItem("users")) ? 
  JSON.parse(localStorage.getItem("users")) : []

  let duplicate= user_data.some(function (data){
    return data.email==email
  })

  if(duplicate){
    alert("you already Registration")
  }
  else{
   user_data.push({
    "name": name,
    "password": password,
    "email": email
  })
  localStorage.setItem("users", JSON.stringify(user_data));
   }
  if(name==""){
  alert("Enter your name")
  }
  if(password==""){
    alert("Enter your password")
  }
  if(email==""){
    alert("Enter your email")
  }

}

function login(event) {
  
  event.preventDefault();
  let email, password;
 password = document.forms.myForm.elements.password.value;
  email = document.forms.myForm.elements.email.value;
  var user_data = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users")) : [];


  let fetch_data= user_data.some(function (user_record) {
      return user_record.email == email && user_record.password == password
    })

  if (fetch_data) {
    window.location.href = 'profile.html';
   // window.open('profile.html')
  }
  else {
    alert("Registration Now")
  }

}
