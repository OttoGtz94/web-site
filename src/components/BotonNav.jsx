import React from 'react';

const BotonNav = ({ clase, irabajo }) => {
	return (
		<div className='circulo boton-abajo' onClick={irabajo}>
			<div className={clase}></div>
		</div>
	);
};

export default BotonNav;
