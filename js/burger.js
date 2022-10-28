let burgerButton = document.querySelector("#burger-button");
let closeButton = document.querySelector("#close-button");
let menu = document.querySelector(".burger-content");

burgerButton.onclick = function() {
	menu.style.display = "block";
}
closeButton.onclick = function() {
	menu.style.display = "none";
}