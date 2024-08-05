var chat_id = ['chat_1','chat_2','chat_3','chat_4'];

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

function close_chat(id){
    document.getElementById(id).style.display = 'none';
};