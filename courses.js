console.log("javascript loaded");
function enrollCourse() {
    const message = document.getElementById("message");
    message.style.display = "block";
setTimeout(function (){
    message.style.display = "none";
}, 3000);
}