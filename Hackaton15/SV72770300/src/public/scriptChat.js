const socket = io();

const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    alert("No has iniciado sesión.");
    window.location.href = "/";
}

document.getElementById("user-name").innerText = `Conectado como: ${user.email}`;

const input = document.getElementById("input");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");


function addMessage(msg) {
    const messageElement = document.createElement("div");
    messageElement.className = "message p-2 border-bottom";

    if (msg.email === user.email) {
        messageElement.classList.add("sent");
    } else {
        messageElement.classList.add("received");
    }

    messageElement.innerHTML = `<strong>${msg.email}:</strong> ${msg.message}`;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
}


fetch(`/api/messages/${encodeURIComponent(user.email)}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(addMessage);
    })
    .catch(err => console.error('Error al cargar mensajes:', err));

sendButton.addEventListener("click", () => {
    const messageText = input.value.trim();
    if (messageText !== "") {
        const message = {
            email: user.email,
            message: messageText
        };

        socket.emit("chat message:client", message);
        input.value = "";
    }
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendButton.click();
});

socket.on("chat message:server", (msg) => {
    addMessage(msg);
});
