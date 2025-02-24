// code for hide and show the login and register form
let loginBtn = document.getElementById("goToSignIn");
let loginDirectory = document.getElementById("login");
let signInBtn = document.getElementById("goToRegister");
let signInDirectory = document.getElementById("register");

signInBtn.addEventListener('click', function() {
    signInDirectory.classList.remove('hide');
    loginDirectory.classList.add('hide');
});
loginBtn.addEventListener('click', function() {
    loginDirectory.classList.remove('hide');
    signInDirectory.classList.add('hide');
});
// code for hide and show the login and register form

// code for login and register form
