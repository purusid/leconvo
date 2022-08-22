/*global variables*/
var chat = {
    open: function () {
        document.getElementById('main-page').style.display = 'none';
        document.getElementById('chat-page').style.display = 'grid';
    },
    exit: function () {
        document.getElementById('chat-page').style.display = 'none';
        document.getElementById('main-page').style.display = 'grid';
    }
}

/*initialize global variables*/
function initglobalvars() {
    chat.page = document.getElementById('chat-page');
    chat.msginp = document.getElementById('msg');
}
