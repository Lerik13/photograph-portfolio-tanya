let reviews;
let slideIndex = 0;

function loadReviews(review) {
	return `
		<div class="review grid grid-cols-1 md:grid-cols-6 max-w-full flex flex-col md:flex-row flex-grow shrink-0 basis-full">
			<div class="h-[18rem] sm:h-[18rem] md:h-auto lg:h-[22rem] xl:h-[24rem] col-span-2 overflow-hidden">
				<Image src="${review.headshot}" alt="${review.name}" format="avif" class="object-cover w-full h-full" />
			</div>
			<div class="h-[31rem] sm:h-[26rem] md:h-auto lg:h-[22rem] xl:h-[24rem] col-span-4 flex flex-col space-y-6 px-5 md:px-10 xl:px-20 py-10 bg-veryLightGray text-darkGray">
				<p class="font-serif text-brightRed text-xl">
					${review.name}
				</p>
				<p class="">
					${review.body}
				</p>
			</div>
		</div>
	`;
}

function moveSlider(e) {
	//if (e.currentTarget.id.includes('right'))
	slideIndex === reviews.length - 1 ? (slideIndex = 0) : slideIndex++;
	document.querySelector('.reviews').style.transform = `translate(${-100 * slideIndex}%)`;
}

// Fetch the 'data' from API 'reviews.json'
async function fetchReviews() {
	await fetch('../data/reviews.json')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then((data) => {
		reviews = data;
		// Parse the data and create the 'review' divs
		document.querySelector('.reviews').innerHTML = data.map(loadReviews).join('');
	})
	.catch((error) => {
		console.error('There has been a problem with your fetch operation:', error);
	})
}

fetchReviews();

// Add event listeners to move the slider right
document.querySelector('#reviews-arrow-right').addEventListener('click', moveSlider)
