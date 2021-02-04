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

export const navegar = id => {
	const jumbotron = document.querySelector(`${id}`);
	// jumbotron.scrollIntoView({ behavior: 'smooth' });
	jumbotron.scrollIntoView({ behavior: 'smooth' });
};
