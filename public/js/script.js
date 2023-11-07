window.addEventListener("load", () => {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	let timeln = gsap.timeline({
		scrollTrigger: {
			trigger: ".cards",
			pin: true,
			pinSpacing: true,
			start: "left-=120px left",
			end: "+=2000",
			scrub: 1,
		},
	});

	timeln.addLabel("card1");
	timeln.to(".card-1", {
		xPercent: 0,
		opacity: 1,
	});

	timeln.from(".card-2", {
		xPercent: 75,
		opacity: 0,
	});
	timeln.addLabel("card2");

	timeln.to(
		".card-1",
		{
			scale: 0.95,
			xPercent: -0.5,
			opacity: 0.5,
		},
		"-=0.3"
	);

	timeln.to(".card-2", {
		xPercent: 0,
		opacity: 1,
	});

	timeln.from(".card-3", {
		xPercent: 75,
		opacity: 0,
	});
	timeln.addLabel("card3");

	timeln.to(
		".card-2",
		{
			scale: 0.98,
			xPercent: -0.4,
			opacity: 0.6,
		},
		"-=0.3"
	);

	timeln.to(".card-3", {
		xPercent: 0,
		opacity: 1,
	});

	timeln.to(".card-3", {});

	const tl = gsap.timeline({
		defaults: {
			duration: 0.75,
			ease: "power3.out",
		},
	});

	// Split text
	const logo = document.querySelector(".theme-title");
	const letters = logo.textContent.split("");
	logo.textContent = "";
	letters.forEach((letter) => {
		if (letter === " ") {
			letter = "&nbsp;";
		}
		logo.innerHTML += `<span class="letter">${letter}</span>`;
	});

	gsap.set(".letter", {
		display: "inline-block",
	});

	ScrollTrigger.create({
		trigger: ".letter",
		start: "5% bottom",
		onEnter: () =>
			gsap.fromTo(
				".letter",
				{
					y: "100%",
				},
				{
					y: 0,
					delay: 0,
					stagger: 0.05,
					ease: "back.out(3)",
				}
			),
	});

	ScrollTrigger.create({
		trigger: ".letter",
		start: "bottom bottom",
		onEnterBack: () =>
			gsap.to(".letter", {
				y: "-100%",
				delay: 0,
				stagger: 0.05,
				ease: "back.in(3)",
			}),
	});

	gsap.fromTo(
		".theme-description-container",
		{
			y: "100%",
		},
		{
			y: 0,
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".theme-description-container",
				start: "top bottom",
				end: "center center",
			},
		}
	);

	gsap.fromTo(
		".theme-description",
		{
			opacity: 0,
			y: 50,
		},
		{
			opacity: 1,
			y: 0,
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".theme-description",
				start: "top bottom",
				end: "center center",
			},
		}
	);
});
