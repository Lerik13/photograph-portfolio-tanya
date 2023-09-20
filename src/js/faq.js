function loadFAQ(faq) {
	return `
		<li class="border-t border-brightRed py-4">
			<a href="#" class="faq_question font-serif text-xl">
				${faq.question}
			</a>
			<div class="faq_answer hidden pt-2 pl-4">
			${faq.answer}
			</div>
		</li>
	`;
}

// Fetch the 'data' from API 'faq.json'
async function fetchFAQ() {
	await fetch('../data/faq.json')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then((data) => {
		// Parse the data and create list items
		document.querySelector('.faq').innerHTML = data.map(loadFAQ).join('');

		document.querySelectorAll('.faq_question').forEach((faq_question) => {
			faq_question.addEventListener('click', (e) => {
				e.preventDefault()
				document.querySelectorAll('.faq_answer').forEach((faq_answer) => faq_answer.classList.add('hidden'))
				e.target.nextElementSibling.classList.remove('hidden');
				//e.target.nextElementSibling.classList.toggle('hidden');
			})
		})
		
	})
	.catch((error) => {
		console.error('There has been a problem with your fetch operation:', error);
	})
}

fetchFAQ();


