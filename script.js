console.log("Welcome to Matt & Maya's Wedding Website!");

const encodedPassword = "ZWxsaWViZWFu";

function decodeBase64(encoded) {
    return atob(encoded);
}

function checkPassword() {
    const userPassword = document.getElementById("password-input").value;
    const decodedPassword = decodeBase64(encodedPassword);
    const userPasswordHash = CryptoJS.SHA256(userPassword).toString();
    const correctPasswordHash = CryptoJS.SHA256(decodedPassword).toString();
    if (userPasswordHash === correctPasswordHash) {
        console.log("Password is correct");
        document.getElementById("protected-content").style.display = "block";
        document.getElementById("password-overlay").style.display = "none";
    } else {
        console.log("Password is WRONG");
        alert("Incorrect password. Please try again.");
    }
}