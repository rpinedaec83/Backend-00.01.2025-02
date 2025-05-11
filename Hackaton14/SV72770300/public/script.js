function generateUserNameRamdon() {
    const adjetivos = ["brave", "clever", "swift", "bold", "epic"];
    const sustantivos = ["tiger", "lion", "wolf", "shark", "panther"];

    const numero = Math.floor(Math.random() * 1000);

    const adjetivoAleatorio =
        adjetivos[Math.floor(Math.random() * adjetivos.length)];
    const sustantivoAleatorio =
        sustantivos[Math.floor(Math.random() * sustantivos.length)];

    return `${adjetivoAleatorio}${sustantivoAleatorio}${numero}`;
};

const socket = io();
let username = generateUserNameRamdon();

const existUsername = localStorage.getItem("username");
if (existUsername) {
    username = existUsername;
} else {
    localStorage.setItem("username", username);
}

const buttonSend = document.getElementById("sendButton");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

const attachEditDeleteEvents = (messageText, data) => {

    const btnDelete = messageText.querySelector(".delete");
    btnDelete.addEventListener("click", (e) => {
        e.preventDefault();
        deleteMessage(btnDelete.dataset.id);
    });

    const btnEdit = messageText.querySelector(".edit");
    btnEdit.addEventListener("click", (e) => {
        e.preventDefault();
        const nuevoMensaje = prompt("Editar mensaje:", data.message);
        if (nuevoMensaje && nuevoMensaje.trim() !== "") {
            socket.emit("client:updateMessage", {
                id: btnEdit.dataset.id,
                message: nuevoMensaje.trim(),
                respuesta: true,
            });
        }
    });
}

const addMessagetoUI = (data, isUserMessage) => {

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    if (isUserMessage) {
        messageElement.classList.add("user-message");
    }
    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    let userAvatar = String(data.user);
    avatar.textContent = userAvatar.charAt(0).toUpperCase();

    const messageContent = document.createElement("div");
    messageContent.classList.add("message-content");
    const messageText = document.createElement("p");

    if (isUserMessage) {

        messageText.innerHTML = `
            <strong>${data.user}:</strong> ${data.message}
            <button data-id="${data._id}" class="edit">Edit</button>
            <button data-id="${data._id}" class="delete">Delete</button>
        `;

        attachEditDeleteEvents(messageText, data);;

    } else {
        messageText.innerHTML = `
            <strong>${data.username}:</strong> ${data.message}
            `;
    }

    messageContent.appendChild(messageText);
    messageElement.appendChild(avatar);
    messageElement.appendChild(messageContent);
    messages.appendChild(messageElement);

    messages.scrollTop = messages.scrollHeight;
}


buttonSend.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        socket.emit("server:chatevent", { username, message: input.value.trim() });
        input.value = "@botIdat ";
    }
});

const deleteMessage = (id) => {
    socket.emit("client:deleteMessage", id);
    const messageElement = document.querySelector(`.message button.delete[data-id="${id}"]`)?.closest(".message");
    if (messageElement) {
        const messageContent = messageElement.querySelector(".message-content p");
        messageContent.innerHTML = "<em>Mensaje Eliminado</em>";
    }
}

socket.on('server:newMessage', message => {
    console.log(message);
    addMessagetoUI(message, true);
}
);

socket.on("server:updatedMessage", updatedMessage => {

    const messageElement = document.querySelector(`.message button.edit[data-id="${updatedMessage._id}"]`)?.closest(".message");

    console.log(messageElement);

    if (messageElement) {
        const messageContent = messageElement.querySelector(".message-content p");
        messageContent.innerHTML = `
            <strong>${updatedMessage.user}:</strong> ${updatedMessage.message}
            <button data-id="${updatedMessage._id}" class="edit">Edit</button>
            <button data-id="${updatedMessage._id}" class="delete">Delete</button>
        `;

        attachEditDeleteEvents(messageContent, updatedMessage)
    }
});

socket.on("server:respuesta", data => {
    console.log("response data", data);
    if (data.username !== username) {
        addMessagetoUI(data, false);
    }
});