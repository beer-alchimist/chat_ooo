var chatOpen = false;
var msg = false;

// Функция для переключения окна чата
function toggleChat() {
    chatOpen = !chatOpen;
    document.getElementById("chat-window").style.display = chatOpen ? "block" : "none";

    if (msg !== true) {
        setTimeout(() => {
            const chatBody = document.getElementById("chat-body");
            chatBody.innerHTML += "<div class='text-end mt-2'><div class='message_bot_container rounded-3'><span>Здравствуйте! Я виртуальный помощник. Какой у вас вопрос?</span></div></div>";
            chatBody.scrollTop = chatBody.scrollHeight; // Прокрутка вниз
        }, 300);
        msg = true;
    }
}

function sendMessage() {
    const input = document.getElementById("message-input");
    const chatBody = document.getElementById("chat-body");

    if (input.value.trim() !== "") {
        chatBody.innerHTML += `<div class='text-start mt-2'><div class='message_user_container'><span>${input.value }</span></div></div>`;
        document.getElementById("send-button").disabled = true;
        chatBody.scrollTop = chatBody.scrollHeight;
        //bot
        chatBody.innerHTML += `<div class='text-end mt-2'><div class='message_bot_container'><span>${input.value }</span></div></div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
        //bot
        input.value = "";
    }
}

function handleInput() {
    const input = document.getElementById("message-input").value;
    document.getElementById("send-button").disabled = input.trim() === "";
}