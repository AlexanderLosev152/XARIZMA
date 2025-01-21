const mobileBtn = document.querySelector('.mobile-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileBtn.addEventListener('click', event => {
	event.stopPropagation();
	mobileBtn.classList.toggle('open');
	mobileMenu.classList.toggle('open');
});

document.addEventListener('click', event => {
	if (!mobileBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
		// Убираем классы "open"
		mobileBtn.classList.remove('open');
		mobileMenu.classList.remove('open');
	}
});
