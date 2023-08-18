const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const nav_shadow = document.getElementById('menu-shadow');

function openMenu() {}
function closeMenu() {}

const toggleMenu = () => {
	btn.classList.toggle('open');
	nav_shadow.classList.toggle('block');
	nav_shadow.classList.toggle('hidden');
	nav.classList.toggle('flex');
	nav.classList.toggle('hidden');
	nav.classList.toggle('right-0');
	nav.classList.toggle('right-[-220px]');
}

btn.addEventListener('click', () => {
	toggleMenu();
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	toggleMenu();
}))