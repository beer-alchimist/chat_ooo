var dialog_filter_message_id = {
    dialogs_id:['filter_new', 'filter_old','filter_all'],
    chat_id:['notes','comment','history_caht']
};
const width_display = window.innerWidth;

function inp_activ (id){
    var class_status = document.getElementById(id).className;
    switch (class_status){
        case 'link_filter_active':{
            for(var i = 0; dialog_filter_message_id.dialogs_id.length-1 >= i; i++){
                if(id !== dialog_filter_message_id.dialogs_id[i]){
                    document.getElementById(dialog_filter_message_id.dialogs_id[i]).className = 'link_filter_disabled';
                };
            };
            break;
        };

        case 'link_filter_disabled':{
            for(var i = 0; dialog_filter_message_id.dialogs_id.length-1 >= i; i++){
                if(id !== dialog_filter_message_id.dialogs_id[i]){
                    document.getElementById(dialog_filter_message_id.dialogs_id[i]).className = 'link_filter_disabled';
                };
            };
            document.getElementById(id).className = 'link_filter_active fw-bold';
            break;
        };

        case 'btn btn-secondary rounded-pill text-white chat_btn_disabled':{
            for(var i = 0; dialog_filter_message_id.chat_id.length-1 >= i; i++){
                if(id !== dialog_filter_message_id.chat_id[i]){
                    document.getElementById(dialog_filter_message_id.chat_id[i]).className = 'btn btn-secondary rounded-pill text-white chat_btn_disabled';
                };
            };
            document.getElementById(id).className = 'btn btn-secondary rounded-pill text-white chat_btn_active';
            break;
        };
    };
    console.log(document.getElementById(id));
};