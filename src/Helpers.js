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
