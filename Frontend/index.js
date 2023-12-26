let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.querySelector('.login-box .clkbtn');
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            location.reload();
        });
    }
    var signupButton = document.querySelector('.signup-box .clkbtn');
    if (signupButton) {
        signupButton.addEventListener('click', function () {
            location.reload();
        });
    }
});

