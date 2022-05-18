const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    harmburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');
 
	togglePassword.addEventListener('click', function (e) {
	// toggle the type attribute
	const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
