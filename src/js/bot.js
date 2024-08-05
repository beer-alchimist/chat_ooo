var chatOpen = false;
var msg = false;
/*var histori = {
    user:[],
    bot:[]
};*/

// Функция для переключения окна чата
function toggleChat() {
    chatOpen = !chatOpen;
    document.getElementById("chat-window").style.display = chatOpen ? "block" : "none";

    if (msg !== true) {
        const currentDate = new Date();
        setTimeout(() => {
            const chatBody = document.getElementById("chat-body");
            chatBody.innerHTML += `<div class='text-end mt-2'><div class='message_bot_container rounded-3'><span>Здравствуйте! Я виртуальный помощник. Какой у вас вопрос?</span></div><div><span>${currentDate.getHours()}:${currentDate.getMinutes()}</span></div></div>`;
            chatBody.scrollTop = chatBody.scrollHeight; // Прокрутка вниз
        }, 300);
        msg = true;
    }
}

function sendMessage() {
    const input = document.getElementById("message-input");
    const chatBody = document.getElementById("chat-body");
    //histori.user.push(input.value);
    //histori.bot.push(input.value);

    if (input.value.trim() !== "") {
        const currentDate = new Date();
        chatBody.innerHTML += `<div class='text-start mt-2'><div class='message_user_container'><span>${input.value }</span></div><div><span>${currentDate.getHours()}:${currentDate.getMinutes()}</span></div></div>`;
        document.getElementById("send-button").disabled = true;
        chatBody.scrollTop = chatBody.scrollHeight;

        switch (input.value){
            case 'Привет':{
                setTimeout(()=>{
                    chatBody.innerHTML += `<div class='text-end mt-2'><div class='message_bot_container'><span>Здравствуйте я ваш индивидуальный помошник</span></div><div><span>${currentDate.getHours()}:${currentDate.getMinutes()}</span></div></div>`;
                    chatBody.scrollTop = chatBody.scrollHeight;
                },300);
                break;
            };

            case 'hi':{
                setTimeout(()=>{
                    chatBody.innerHTML += `<div class='text-end mt-2'><div class='message_bot_container'><span>Здравствуйте я ваш индивидуальный помошник</span></div><div><span>${currentDate.getHours()}:${currentDate.getMinutes()}</span></div></div>`;
                    chatBody.scrollTop = chatBody.scrollHeight;
                },300);
                break;
            };

            case 'hello':{
                setTimeout(()=>{
                    chatBody.innerHTML += `<div class='text-end mt-2'><div class='message_bot_container'><span>Здравствуйте я ваш индивидуальный помошник</span></div><div><span>${currentDate.getHours()}:${currentDate.getMinutes()}</span></div></div>`;
                    chatBody.scrollTop = chatBody.scrollHeight;
                },300);
                break;
            };

            default:{
                setTimeout(()=>{
                    chatBody.innerHTML += `<div class='text-end mt-2'><div class='message_bot_container'><span>Простите, не могу помочь вам в этом вопросе. Ищу специалиста готового помочь.</span></div><div><span>${currentDate.getHours()}:${currentDate.getMinutes()}</span></div></div>`;
                    chatBody.scrollTop = chatBody.scrollHeight;
                },300);
                break;
            };
        };
        input.value = "";
    }
}

function handleInput() {
    const input = document.getElementById("message-input").value;
    document.getElementById("send-button").disabled = input.trim() === "";
}

function donwload(){
};