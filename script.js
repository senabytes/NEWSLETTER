const email = document.getElementById("mail");
const subButton = document.getElementById("subscribe");
const errorLabel = document.querySelector(".errorLabel");
const dismissBtn = document.getElementById("dismiss");

const valideEmail = (emailValue) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailValue);
};


if (subButton) {
    subButton.addEventListener("click", function (event) {
        if (email.value === "") {
            email.classList.add("error");
            errorLabel.style.display = "block";
            return;
        } else if (!valideEmail(email.value)) {
            email.classList.add("error");
            errorLabel.style.display = "block";
            return;
        } else {
            window.location.href = `success.html?email=${encodeURIComponent(email.value)}`;
        }

        email.classList.remove("error");
        errorLabel.style.display = "none";
    });
}

if (dismissBtn) {
    dismissBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}
