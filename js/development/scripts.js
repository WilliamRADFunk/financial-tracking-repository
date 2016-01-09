function validateLogin(e)
{
	e.preventDefault();
	e.stopPropagation();
	var name = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	return login(name, pwd);
}