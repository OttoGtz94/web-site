import React from 'react';

const BotonNav = ({ clase, irabajo }) => {
	return (
		<div
			className='circulo botonDireccion'
			onClick={irabajo}
		>
			<div className={`${clase} triangulo-boton `}></div>
		</div>
	);
};

export default BotonNav;
