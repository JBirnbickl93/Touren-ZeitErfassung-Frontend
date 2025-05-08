/* TODO: hier gehts morgen weiter - mit dem Login Button -
    Validierung der Eingabe und Übergabe ans Backend
 */

document.getElementById("loginForm").addEventListener("submit", function (event) {
event.preventDefault();
// Eingabefelder auslesen
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

// Fehler-Nachrichten zurücksetzen
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("loginError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let formIsValid = true;

    // Validierung der Eingaben, Username und Passwort
if (username === "" || username.length < 3 || !/^[A-Za-z]+$/.test(username)) {
    document.getElementById("usernameError").textContent = "Bitte geben Sie einen Benutzernamen ein, der mindestens 3 Zeichen enthält, und nur aus Buchstaben besteht.";
    document.getElementById("usernameError").classList.add("visible");
    formIsValid = false;
}
else {
    document.getElementById("usernameError").classList.remove("visible");
}

if (password === "" || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password) ){
    document.getElementById("passwordError").textContent= "Das Passwort muss mindestens 8 Zeichen lang sein und mindestens eine Zahl enthalten, sowie einen Groß- und einen Kleinbuchstaben."
    document.getElementById("passwordError").classList.add("visible");
        formIsValid = false;
}
else {
    document.getElementById("passwordError").classList.remove("visible");
    }

    if (formIsValid){
        document.getElementById("successMessage").textContent = "Login erfolgreich!";
        console.log("Login erfolgreich!");
    } else {
        console.log("Login fehlgeschlagen!");
    }

});