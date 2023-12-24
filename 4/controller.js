const controller = {}

controller.register = (data) => {
  if (data.firstName === "") {
    // alert("*Please input your first name");
    document.getElementById("first-name-error").innerText = "*Please input your first name";
  }
    else {
      document.getElementById("first-name-error").innerText = "";
    }
   if(data.lastName === "") {
    document.getElementById("last-name-error").innerText = "*Please input your first name";
  }
    else {
      document.getElementById("last-name-error").innerText = "";
    }
  if(data.email === "") {
    document.getElementById("email-error").innerText = "*Please input your email";
  }
    else {
      document.getElementById("email-error").innerText = "";
    }
  if(data.password === "") {
    document.getElementById("password-error").innerText = "*Please input your password";
  }
    else {
      document.getElementById("password-error").innerText = "";
    }
  if(data.confirmPassword === "") {
    document.getElementById("confirm-password-error").innerText = "*Please input your cònfirm password";
  }
    else {
      document.getElementById("confirm-password-error").innerText = "";
    }
    // else {
    //   console.log("done");
    // }


    /////////////xu li confirm password
    data.password != data.confirmPassword?
    document.getElementById("confirm-password-error").innerText = "Confirm password is error" :
    document.getElementById("confirm-password-error").innerText = "";

    //tao user 
    if(data.firstName != "" && data.lastName != "" && 
    data.email != "" &&
    data.password != "" &&
    data.confirmPassword != "" &&
    data.confirmPassword == data.password) {
      model.register(data);
    }

}