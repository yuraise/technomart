var btnOpen = document.querySelector(".btn-write-us");
var popupForm = document.querySelector(".write-us");
var btnClose = popupForm.querySelector(".btn-close");
var form = popupForm.querySelector("form");
var name = popupForm.querySelector("#name");
var email = popupForm.querySelector("#email");
var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

btnOpen.addEventListener("click", function(event){
	event.preventDefault();
	popupForm.classList.add("show");
	name.focus();
});

btnClose.addEventListener("click", function(event){
	event.preventDefault();
	popupForm.classList.remove("show");
	popupForm.classList.remove("form-eror");
});

form.addEventListener("submit", function(event){
	if(!name.value || !email.value) {
		event.preventDefault();
		console.log("Error");
		popupForm.classList.add("form-error");
	} else {
		localStorage.setItem("name", name.value);
		localStorage.setItem("email", email.value);
	}
});