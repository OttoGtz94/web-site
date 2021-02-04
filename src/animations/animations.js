import {
	gsap,
	SteppedEase,
	Circ,
	Cubic,
	Back,
	Power3,
	Sine,
} from 'gsap';

export const animacionParpadeo = () => {
	function animacionBoton() {
		gsap
			.timeline({
				defaults: {
					duration: 0.5,
					delay: 0.2,
					yoyo: true,
					repeat: -1,
					ease: SteppedEase.config(6),
				},
			})
			.from('.triangulo-boton', {
				borderTopColor: '#f8f8f8',
				borderBottomColor: '#f8f8f8',
			})
			.to('.triangulo-boton', {
				borderTopColor: '#0d6d89',
				borderBottomColor: '#0d6d89',
			})
			.from('.botonDireccion', {
				borderColor: '#f8f8f8',
			})
			.to('.botonDireccion', {
				borderColor: '#0d6d89',
			});
	}
	function animacionBotonHover() {
		gsap
			.timeline({
				defaults: {
					duration: 0.3,
					delay: 0.1,
					repeat: -1,
					ease: Circ.easeInOut,
				},
			})
			.from('.seleccionado', {
				borderColor: '#c70079',
			})
			.to('.seleccionado', {
				borderColor: '##904dd6',
			})
			.from('.triangulo-seleccionado', {
				borderTopColor: '#c70079',
				borderBottomColor: '#c70079',
			})
			.to('.triangulo-seleccionado', {
				borderTopColor: '##904dd6',
				borderBottomColor: '##904dd6',
			});
	}
	const botones = document.querySelectorAll(
		'.botonDireccion'
	);
	botones.forEach(boton => {
		boton.addEventListener('mouseover', () => {
			boton.classList.remove('botonDireccion');
			boton.firstElementChild.classList.remove(
				'triangulo-boton'
			);
			boton.classList.add('seleccionado');
			boton.firstElementChild.classList.add(
				'triangulo-seleccionado'
			);
			animacionBotonHover();
		});
		boton.addEventListener('mouseout', () => {
			boton.classList.remove('seleccionado');
			boton.firstElementChild.classList.remove(
				'triangulo-seleccionado'
			);
			boton.classList.add('botonDireccion');
			boton.firstElementChild.classList.add(
				'triangulo-boton'
			);
			animacionBoton();
		});
	});

	return animacionBoton();
};

export const animacionMenu = () => {
	function inicioAnimacion() {
		gsap
			.timeline({
				defaults: {
					duration: 0.8,
					delay: 0.1,
					repeat: -1,
					ease: Cubic.easeInOut,
				},
			})
			.from('.btn-menu', {
				color: '#0d6d89',
				translateX: 5,
			})
			.to('.btn-menu', {
				color: '#c70079',

				translateX: -5,
			});
	}
	function hoverAnimacion() {
		gsap
			.timeline({
				defaults: {
					duration: 0.5,
					delay: 0.1,
					repeat: -1,
					ease: Back.easeInOut,
				},
			})
			.from('.btn-menu', {
				color: '#f9f9f9',
				translateX: 5,
			})
			.to('.btn-menu', {
				color: '#904dd6',

				translateX: -5,
			});
	}

	const botonMenu = document.querySelector('.btn-menu');
	botonMenu.addEventListener('mouseover', () => {
		hoverAnimacion();
	});
	botonMenu.addEventListener('mouseout', () => {
		inicioAnimacion();
	});

	return inicioAnimacion();
};

export const animacionNombre = () => {
	gsap
		.timeline({
			defaults: {
				duration: 1,
				delay: 0,
				ease: Circ.easeIn,
			},
		})
		.from('.nombreTitulo', {
			color: '#e8e8e8',
			// opacity: 0,
			// scale: 0.6,
			translateX: -500,
			opacity: 0.1,
		})
		.to('.nombre-titulo', {
			color: 'auto',
			// opacity: 1,
			// scale: 1,
			translateX: 0,
			opacity: 1,
		})
		.from('.profesionTitulo', {
			color: '#898989',
			translateX: 200,
			opacity: 0,
		})
		.to('.profesionTitulo', {
			color: 'auto',
			translateX: 0,
			opacity: 1,
		})
		.from('.circulo-logo', {
			opacity: 0,
		})
		.to('.circulo-logo', {
			opacity: 1,
		})
		.from('.barraNav', {
			opacity: 0,
			translateY: -100,
		})
		.to('.barraNav', {
			opacity: 1,
			translateY: 0,
		})
		.from('.botonAbajo', {
			opacity: 0,
			translateY: 200,
		})
		.to('.botonAbajo', {
			opacity: 1,
			translateY: 0,
		});
};

export const animacionLogo = () => {
	gsap
		.timeline({
			defaults: {
				duration: 2,
				// delay: 1,
				repeat: -5,
				delay: 15,
				ease: Circ.easeIn,
			},
		})
		.from('.circulo-logo', {
			delay: 3,
			scale: 1.1,
			borderColor: 'auto',
			backgroundColor: 'auto',
		})
		.to('.circulo-logo', {
			scale: 1,
			borderColor: '#0d6d89',
			backgroundColor: '#000',
		});
};

export const animacionIconoPC = () => {
	gsap
		.timeline({
			defaults: {
				duration: 0.5,
				delay: 3,
				yoyo: true,
			},
		})
		.from('.iconoPC', {
			scale: 0.5,
			rotate: 0,
		})
		.to('.iconoPC', {
			scale: 1,
			rotate: 90,
		})
		.to('.iconoPC', {
			scale: 1,
			rotate: 0,
		})
		.to('.iconoPC', {
			scale: 1,
			rotate: -90,
		});
};
