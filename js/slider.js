// // Выбераем кнопку переключение слайда назад
// var prev = document.querySelector("#prev");
// // Выбераем кнопку переключение слайда вперед
// var next = document.querySelector("#next");
// // Выбераем картинку 
// let slideImg = document.querySelector(".slider-img img");
// // Функция клика по кнопке next
// next.onclick = function() {
// 	// текущий слайд
// 	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
// 	console.dir(currentSlide);
//     // Удаляем класс active у текушего слайда
// 	currentSlide.classList.remove('active');
//     // ишем следующий слайд
// 	let nextSlide = currentSlide.nextElementSibling;
// 	if(nextSlide) {
// 		// Добавляем класс active к следуюшему слайду
// 		nextSlide.classList.add('active');
// 	} else {
// 		// Выбераем первый слайд
// 		nextSlide = document.querySelector(".slider .slider-small-img li");
// 		// Добавляем класс active к текущему слайду
// 		nextSlide.classList.add('active');
// 	}
//     // Меняем src у текушей картинке(меняем картинку)
// 	slideImg.src = nextSlide.querySelector("img").src;
// }
// // Функция клика по кнопке prev
// prev.onclick = function() {
// 	// текущий слайд
// 	let currentSlide = document.querySelector(".slider .slider-small-img li.active");
// 	console.dir(currentSlide);
//     // Удаляем класс active у текушего слайда
// 	currentSlide.classList.remove('active');
//     // ишем предыдуший слайд
// 	let prevSlide = currentSlide.previousElementSibling;
// 	if(prevSlide) {
// 		// Добавляем класс active к предыдушему слайду
// 		prevSlide.classList.add('active');
// 	} else {
// 		// Выбераем последний слайд
// 		prevSlide = document.querySelector(".slider .slider-small-img li:last-child");
// 		// Добавляем класс active к текущему слайду
// 		prevSlide.classList.add('active');
// 	}
// 	// Меняем src у текушей картинке(меняем картинку)
// 	slideImg.src = prevSlide.querySelector("img").src;
// }

