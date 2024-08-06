var chat_id = ['chat_1','chat_2','chat_3','chat_4','chat_1_1','chat_2_2','chat_3_3','chat_4_4'];

function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
};

function open_chat(id){
    chat_id.forEach(row=>{
        if (id == row) {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(row).style.display = 'none';
        }
    });
};

function open_chat_2(id){
    document.getElementById('dialogs_2').style.display= 'none';
    chat_id.forEach(row=>{
        if (id == row) {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(row).style.display = 'none';
        }
    });
};

function close_chat_2(id){
    document.getElementById(id).style.display = 'none';
    document.getElementById('dialogs_2').style.display = 'block';
};

function close_chat(id){
    document.getElementById(id).style.display = 'none';
};