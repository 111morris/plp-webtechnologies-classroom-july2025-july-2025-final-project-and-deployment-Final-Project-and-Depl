// Toggle navigation menu on mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('nav-menu-visible');
});

// Scroll animation: fade in sections on scroll
const faders = document.querySelectorAll('section');

const appearOptions = {
	threshold: 0.1,
	rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) return;
		entry.target.classList.add('appear');
		appearOnScroll.unobserve(entry.target);
	});
}, appearOptions);

faders.forEach(section => {
	appearOnScroll.observe(section);
});

document.addEventListener('DOMContentLoaded', function () {
	const progressBars = document.querySelectorAll('.skill-progress');

	progressBars.forEach(bar => {
		const percent = bar.getAttribute('data-percent');
		bar.style.width = percent + '%';
	});
});

