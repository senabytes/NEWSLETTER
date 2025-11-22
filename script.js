const email = document.getElementById("mail");
const subButton = document.getElementById("subscribe");
const errorLabel = document.querySelector(".errorLabel");


const valideEmail = (emailValue) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
};

subButton.addEventListener("click", function (event) {
    if(email.value === ""){
        email.classList.add("error");
        errorLabel.style.display = "block";
        return;
        
    } else if(!valideEmail(email.value)){
        email.classList.add("error");
        errorLabel.style.display = "block";
        return;
    }else{
        window.location.href = "success.html";

    }

    email.classList.remove("error");
    errorLabel.style.display = "none";
});


