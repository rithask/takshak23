window.addEventListener("load", () => {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	// let timeln = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: ".cards",
	// 		pin: true,
	// 		pinSpacing: true,
	// 		start: "left-=120px left",
	// 		end: "+=2000",
	// 		scrub: 1,
	// 	},
	// });

	// timeln.addLabel("card1");
	// timeln.to(".card-1", {
	// 	xPercent: 0,
	// 	opacity: 1,
	// });

	// timeln.from(".card-2", {
	// 	xPercent: 75,
	// 	opacity: 0,
	// });
	// timeln.addLabel("card2");

	// timeln.to(
	// 	".card-1",
	// 	{
	// 		scale: 0.95,
	// 		xPercent: -0.5,
	// 		opacity: 0.5,
	// 	},
	// 	"-=0.3"
	// );

	// timeln.to(".card-2", {
	// 	xPercent: 0,
	// 	opacity: 1,
	// });

	// timeln.from(".card-3", {
	// 	xPercent: 75,
	// 	opacity: 0,
	// });
	// timeln.addLabel("card3");

	// timeln.to(
	// 	".card-2",
	// 	{
	// 		scale: 0.98,
	// 		xPercent: -0.4,
	// 		opacity: 0.6,
	// 	},
	// 	"-=0.3"
	// );

	// timeln.to(".card-3", {
	// 	xPercent: 0,
	// 	opacity: 1,
	// });

	// timeln.to(".card-3", {});

	// const tl = gsap.timeline({
	// 	defaults: {
	// 		duration: 0.75,
	// 		ease: "power3.out",
	// 	},
	// });

	/*--------------------
Vars
--------------------*/
	let progress = 50;
	let startX = 0;
	let active = 0;
	let isDown = false;

	// 	/*--------------------
	// Contants
	// --------------------*/
	const speedWheel = 0.02;
	const speedDrag = -0.1;

	// 	/*--------------------
	// Get Z
	// --------------------*/
	const getZindex = (array, index) =>
		array.map((_, i) =>
			index === i ? array.length : array.length - Math.abs(index - i)
		);

	// 	/*--------------------
	// Items
	// --------------------*/
	const $items = document.querySelectorAll(".carousel-item");
	const $cursors = document.querySelectorAll(".cursor");

	const displayItems = (item, index, active) => {
		const zIndex = getZindex([...$items], active)[index];
		// item.style.setProperty("--zIndex", zIndex);
		item.style.setProperty("--active", (index - active) / $items.length);
	};

	// 	/*--------------------
	// Animate
	// --------------------*/
	const animate = () => {
		progress = Math.max(0, Math.min(progress, 100));
		active = Math.floor((progress / 100) * ($items.length - 1));

		$items.forEach((item, index) => displayItems(item, index, active));
	};
	animate();

	// 	/*--------------------
	// Click on Items
	// --------------------*/
	$items.forEach((item, i) => {
		item.addEventListener("click", () => {
			progress = (i / $items.length) * 100 + 10;
			animate();
		});
	});

	// 	/*--------------------
	// Handlers
	// --------------------*/
	const handleWheel = (e) => {
		const wheelProgress = e.deltaY * speedWheel;
		progress = progress + wheelProgress;
		animate();
	};

	const handleMouseMove = (e) => {
		if (e.type === "mousemove") {
			$cursors.forEach(($cursor) => {
				$cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
			});
		}
		if (!isDown) return;
		const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
		const mouseProgress = (x - startX) * speedDrag;
		progress = progress + mouseProgress;
		startX = x;
		animate();
	};

	const handleMouseDown = (e) => {
		isDown = true;
		startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
	};

	const handleMouseUp = () => {
		isDown = false;
	};

	/*--------------------
Listeners
--------------------*/
	document.addEventListener("mousewheel", handleWheel);
	document.addEventListener("mousedown", handleMouseDown);
	document.addEventListener("mousemove", handleMouseMove);
	document.addEventListener("mouseup", handleMouseUp);
	document.addEventListener("touchstart", handleMouseDown);
	document.addEventListener("touchmove", handleMouseMove);
	document.addEventListener("touchend", handleMouseUp);

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

	gsap.fromTo(
		".artist_image",
		{
			opacity: 0,
			y: 50,
		},
		{
			opacity: 1,
			y: 0,
			ease: "power1.out",
			scrollTrigger: {
				trigger: ".artist_image",
				start: "50% bottom",
				end: "center center",
			},
		}
	);
});
