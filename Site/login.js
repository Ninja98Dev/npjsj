const accessCode = "123"; /*ToDo (trocha lepsie zabespecenie)*/

window.addEventListener("load", () => {
	if (sessionStorage.getItem("logged") != "true" && window.location.pathname.split('/').pop() != "index.htm")
		window.open("../index.htm", "_self");
});

function LogIn() {
	if (document.getElementsByName("txtPasswd")[0].value == accessCode)
	{
		sessionStorage.setItem("logged", "true");
		window.open("app/menu.htm", "_self");
	}
	else
	{
		document.getElementsByName("inv")[0].innerHTML = "<font color='red'>Nesprávny kód, prístup zamietnutý!</font>";
	}
}
function LogOut() {
	sessionStorage.setItem("logged", "false");
}