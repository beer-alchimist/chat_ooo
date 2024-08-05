var dialogs_id=['filter_new', 'filter_old','filter_all'];

/*var dialog_filter_message_id = {
    dialogs_id:['filter_new', 'filter_old','filter_all'],
    chat_id:['notes','comment','history_caht']
};
const width_display = window.innerWidth;*/
function inp_activ(id){
    dialogs_id.forEach(row=>{
        if (id == row) {
            document.getElementById(id).className = 'fw-bold';
        } else {
            document.getElementById(row).className = '';
        }
    });
};