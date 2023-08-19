const menu_btn = document.getElementById('menu-btn');

const toggleSlideover = () => {
	menu_btn.classList.toggle('open');
	document.getElementById('slideover-container').classList.toggle('invisible');
	document.getElementById('slideover-bg').classList.toggle('opacity-0');
	document.getElementById('slideover-bg').classList.toggle('opacity-50');
	document.getElementById('slideover').classList.toggle('translate-x-full');
}

menu_btn.addEventListener('click', () => {
	toggleSlideover();
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
	toggleSlideover();
}))

document.getElementById('slideover-bg').addEventListener('click', () => {
	toggleSlideover();
})