var prev = document.querySelector("#slidesPrev");
var next = document.querySelector("#slidesNext");
let circleSlides = document.querySelector(".circle-slides li");
let titleSlides = document.querySelector(".testimonials-description");

next.onclick = function() {
	let currentSlide = document.querySelector(".circle-slides li.active");
		currentSlide.classList.remove("active");
		console.dir(currentSlide);

		let nextSlide = currentSlide.nextElementSibling;

		if(nextSlide) {
			nextSlide.classList.add('active');

		} else {
			nextSlide = document.querySelector(".circle-slides li");
			nextSlide.classList.add('active');
		}

		titleSlides.innerHTML = nextSlide.querySelector("ul").innerHTML;

}
prev.onclick = function() {
	let currentSlides = document.querySelector(".circle-slides li.active");
		currentSlides.classList.remove("active");
		console.dir(currentSlides);


		let prevSlide = currentSlides.previousElementSibling;
			console.log(prevSlide);
		if(prevSlide) {
			prevSlide.classList.add('active');

		} else {
			prevSlide = document.querySelector(".circle-slides li:last-child");
			prevSlide.classList.add('active');
		}

		titleSlides.innerHTML = prevSlide.querySelector("ul").innerHTML;

}