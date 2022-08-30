function initvars() {
    inituivars();
}

function init() {
    initvars();
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 2000);
}
