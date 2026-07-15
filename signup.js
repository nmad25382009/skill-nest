const form = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    successMessage.style.display = "block";
    setTimeout(function () {
        window.location.href = "main.html";
    }, 2000);
});