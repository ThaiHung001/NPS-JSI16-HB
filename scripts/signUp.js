let register_form = document.getElementById("register_form")
register_form.addEventListener("submit", function (event) {
  event.preventDefault()


  let name = document.querySelector('register_form.Username').value;
  let email = document.querySelector('register_form.email').value;
  let password = document.querySelector('register_form.password').value;
  let repassword = document.querySelector('register_form.confirm_password').value;

  let user_data = {
    name: name.trim(),
    email: email.trim(),
    password: password.trim(),
    repassword: register_form.confirm_password.value.trim()
  }
  console.log(user_data);

  if (name ==''){
    
  }

  controller(user_data)

});


