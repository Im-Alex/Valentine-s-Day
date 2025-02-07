const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function login() {
    const username = document.getElementById("username").value.trim();
    const validNickName = "Lizeth";

    if (username === validNickName) {
        localStorage.setItem("username", username);
        window.location.href = "index.html";
    } else {
        document.getElementById("error-message").style.display = "block"; // Muestra mensaje de error
    }
}

// Verifica si hay un apodo guardado antes de mostrar el mensaje en index.html
if (window.location.pathname.includes("index.html")) {
    const savedNickname = localStorage.getItem("username");
    if (!savedNickname) {
        window.location.href = "login.html"; // Si no hay apodo, regresa al login
    } else {
        document.getElementById("valentine-message").innerText = `${savedNickname}, Will you be my Valentine? 💕`;
    }
}