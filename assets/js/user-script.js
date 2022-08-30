/*User Variables*/
var user = {}

/*Login*/
function login() {
    user.name = document.getElementById('user-name').value;
    showpage('main-page', 'grid');
    pages.login.remove();
    pages.login = null;
}
