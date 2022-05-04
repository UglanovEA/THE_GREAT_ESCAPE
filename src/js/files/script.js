// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

gsap.to(".background", 2, {
	width: "100%",
});
gsap.from(".header", 1.5, {
	delay: 2.5,
	opacity: 0,
	y: 20,
});
gsap.from(
	".socials ul li",
	1.5,
	{
		delay: 2.8,
		opacity: 0,
		x: -30,
	},
	0.08
);
gsap.from(".texts__title", 1.5, {
	delay: 1.6,
	y: "100%",
	opacity: 0,
});
gsap.from(".texts__subtitle", 1.5, {
	delay: 2,
	y: "100%",
	opacity: 0,
});
gsap.from(
	".desc ul li",
	1.5,
	{
		delay: 2,
		opacity: 0,
		y: 20,
	},
	0.1
);
gsap.from(".desc__text", 1.5, {
	delay: 2.3,
	opacity: 0,
	y: 20,
});
gsap.from(".scrolldown", 1.5, {
	delay: 2.7,
	opacity: 0,
	y: 200,
});
gsap.from(".footer", 1.5, {
	delay: 3.2,
	opacity: 0,
	y: 30,
});
gsap.from(".footer__title", 1.5, {
	delay: 3.5,
	opacity: 0,
	x: -20,
});
