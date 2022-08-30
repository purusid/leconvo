/*UI variables*/
var chat = {
    open: function () {
        pages.main.style.display = 'none';
        pages.chat.style.display = 'grid';
    },
    exit: function () {
        pages.chat.style.display = 'none';
        pages.main.style.display = 'grid';
    }
}

var pages = {}

/*initialize UI variables*/
function inituivars() {
    pages.main = document.getElementById('main-page');
    pages.login = document.getElementById('login-page');
    pages.chat = document.getElementById('chat-page');
    chat.page = document.getElementById('chat-page');
    chat.msginp = document.getElementById('msg');
}

function showpage(id, cssdisplayvalue){
    let pagearr=Object.values(pages);
    for (let i in pagearr){
        pagearr[i].style.display = 'none';
    }
    document.getElementById(id).style.display = cssdisplayvalue;
}
