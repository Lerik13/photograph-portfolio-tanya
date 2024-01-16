let question_open;

function loadFAQ(faq) {
	return `
		<li class="border-t border-brightRed py-4">
			<a id="${faq.id}" href="#" aria-label="Read the answer of this question" class="faq_question font-serif text-xl">
				${faq.question}
			</a>
			<div class="faq_answer hidden pt-2 pl-4 duration-500 ease-out transition-all">
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
				e.preventDefault();
				
				console.log('e.target.id = '+e.target.id)
				console.log('question_open = '+question_open)
				if (e.target.id === question_open) {
					e.target.nextElementSibling.classList.add('hidden');
					question_open = null;
				} else {
					document.querySelectorAll('.faq_answer').forEach((faq_answer) => {faq_answer.classList.add('hidden');})
					e.target.nextElementSibling.classList.remove('hidden');
					question_open = e.target.id;
				}
			})
		})
		
	})
	.catch((error) => {
		console.error('There has been a problem with your fetch operation:', error);
	})
}

fetchFAQ();
