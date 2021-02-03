import { gsap, SteppedEase, Circ } from 'gsap';

export function abrirMenu(estado) {
	if (estado) {
		console.log('true');
	} else {
		console.log('false');
	}
}

export function obtenerYear() {
	return new Date().getFullYear();
}

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
