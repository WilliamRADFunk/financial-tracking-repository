function validateLogin(e) {
	killDefaultEvent(e);
	var name = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	return login(name, pwd);
}
function killDefaultEvent(e) {
	e.preventDefault();
	e.stopPropagation();
}