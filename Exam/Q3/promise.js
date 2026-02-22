const button = document.getElementById("signupBtn");
const message = document.getElementById("message");

button.onclick = function () {

    button.disabled = true;

    message.textContent = "Creating account...";

    const signupPromise = new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve("Account created successfully!");
        }, 2000);

    });

    signupPromise.then(function (result) {
        message.textContent = result;

        button.disabled = false;
    });

};