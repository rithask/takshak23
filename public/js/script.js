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

	// Hero Image
	// tl.fromTo(
	// 	".hero-img",
	// 	{
	// 		scale: 1.3,
	// 		borderRadius: 0,
	// 	},
	// 	{
	// 		scale: 1,
	// 		borderRadius: "2rem",
	// 		delay: 0.35,
	// 		duration: 1.5,
	// 		ease: "elastic.out(1.5, 1)",
	// 	}
	// );

	// CTA #1 line
	// tl.fromTo(
	// 	".cta1",
	// 	{
	// 		x: "100%",
	// 		opacity: 0,
	// 	},
	// 	{
	// 		x: 0,
	// 		opacity: 1,
	// 	},
	// 	"<20%"
	// );
	// tl.fromTo(
	// 	".cta3",
	// 	{
	// 		x: "-100%",
	// 		opacity: 0,
	// 	},
	// 	{
	// 		x: 0,
	// 		opacity: 1,
	// 	},
	// 	"<20%"
	// );
	// tl.fromTo(
	// 	".cta2",
	// 	{
	// 		y: "100%",
	// 		opacity: 0,
	// 	},
	// 	{
	// 		y: 0,
	// 		opacity: 1,
	// 	},
	// 	"<20%"
	// );

	// // CTA #2 line
	// tl.fromTo(
	// 	".cta4",
	// 	{
	// 		x: "100%",
	// 		opacity: 0,
	// 	},
	// 	{
	// 		x: 0,
	// 		opacity: 1,
	// 	},
	// 	"<20%"
	// );
	// tl.fromTo(
	// 	".cta6",
	// 	{
	// 		x: "-100%",
	// 		opacity: 0,
	// 	},
	// 	{
	// 		x: 0,
	// 		opacity: 1,
	// 	},
	// 	"<20%"
	// );
	// tl.fromTo(
	// 	".cta5",
	// 	{
	// 		y: "100%",
	// 		opacity: 0,
	// 	},
	// 	{
	// 		y: 0,
	// 		opacity: 1,
	// 	},
	// 	"<20%"
	// );

	// // CTA button
	// tl.fromTo(
	// 	".cta-button",
	// 	{
	// 		y: 20,
	// 		opacity: 0,
	// 	},
	// 	{
	// 		y: 0,
	// 		opacity: 1,
	// 	},
	// 	"<"
	// );

	// Split text
	const logo = document.querySelector(".theme-title");
	const letters = logo.textContent.split("");
	logo.textContent = "";
	console.log(letters);
	letters.forEach((letter) => {
		if (letter === " ") {
			letter = "&nbsp;";
		}
		logo.innerHTML += `<span class="letter">${letter}</span>`;
	});

	gsap.set(".letter", {
		display: "inline-block",
	});
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
			scrollTrigger: {
				trigger: ".letter",
				start: "10% bottom",
				// scrub: true,
				yoyo: true,
			},
		}
	);

	gsap.registerPlugin(ScrollTrigger);

	gsap.fromTo(
		".theme-description-container",
		{
			y: "100%",
		},
		{
			y: 0,
			delay: 0.5,
			ease: "power2.out",
			// duration: 1,
			scrollTrigger: {
				trigger: ".theme-description-container",
				// start: "10% bottom", // Start when the container is 80% in the viewport
			},
		}
	);

	gsap.fromTo(
		".theme-description",
		{
			opacity: 0,
			y: 50, // Offset to start below and slide up
		},
		{
			opacity: 1,
			y: 0, // Slide up to its original position
			// delay: 1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".theme-description",
				start: "10% bottom", // Start when the container is 80% in the viewport
			},
		}
	);
});
