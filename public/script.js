const element = document.querySelector("#contact-us-container");
const observer = new IntersectionObserver((entries) => {
	element.classList.toggle("animation", entries[0].isIntersecting);
});

observer.observe(element);
