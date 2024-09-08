const values = [...document.querySelectorAll(".number")];

const updateCounts = (el) => {
	const dataValue = parseInt(el.dataset["value"]);
	const increment = Math.ceil(dataValue / 1000);
	let initialValue = 0;

	const increaseCount = setInterval(() => {
		initialValue += increment;

		if (initialValue > dataValue) {
			el.textContent = `${dataValue}+`;
			clearInterval(increaseCount);
			return;
		}

		el.textContent = `${initialValue}+`;
	}, 1);
};

values.forEach((value) => {
	updateCounts(value);
});

// card hover 3d effect
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
	card.addEventListener("mousemove", (e) => {
		let rect = card.getBoundingClientRect();
		let xAxix = (window.innerWidth / 2 - e.clientX) / 10;
		let yAxix = (window.innerHeight / 2 - e.clientY) / 10;

		card.style.transform = `rotateY(${yAxix}deg) rotateX(${xAxix}deg)`;
	});
});

cards.forEach((card, i) => {
	card.addEventListener("mouseleave", (e) => {
		card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	});
});
