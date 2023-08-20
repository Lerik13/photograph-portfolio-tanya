const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('animate-show')
		}/* else { // for multiple times animation
			entry.target.classList.remove('animate-show')
		}*/
	})
})

const hiddenElements = document.querySelectorAll('.animate-hide');
hiddenElements.forEach((el) => observer.observe(el))
