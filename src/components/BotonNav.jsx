import React from 'react';

const BotonNav = ({ clase, navegar }) => {
	return (
		<div
			className='circulo botonDireccion'
			onClick={() => navegar('#habilidades')}
		>
			<div className={`${clase} triangulo-boton `}></div>
		</div>
	);
};

export default BotonNav;
