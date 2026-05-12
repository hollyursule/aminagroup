document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(email === "" || password === ""){
        message.textContent = "Please fill all fields";
        message.style.color = "red";
    } else {
        message.textContent = "Login Successful";
        message.style.color = "green";
    }
});