//////МОДАЛКА ДЛЯ СЕКЦИИ ПРОДУКТЫ
const btns = document.querySelectorAll('.product__button');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
            el.classList.remove('modal--visible');
            $('body').css('overflow', 'hidden');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
            el.classList.remove('modal--visible');
            $('body').css('overflow', 'auto');
		});
});
