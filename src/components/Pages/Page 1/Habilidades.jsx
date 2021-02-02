import React from 'react';
import Cuadrado from '../../Cuadrado';
import Logo from '../../Logo';
import styled from '@emotion/styled';

const ContenedorHabilidades = styled.div`
	width: 100%;
	height: 100vh;
	.rectangulo1 {
		/* background-color: red; */
		position: static;
	}
`;
const ContenedorRectanguloLogo = styled.div`
	background-color: blue;
	height: auto;
`;

const ContenedorLogo = styled.div`
	background-color: yellow;
	position: relative;
	bottom: 100px;
	width: 115px;
`;

const Habilidades = () => {
	return (
		<ContenedorHabilidades>
			<ContenedorRectanguloLogo>
				<Cuadrado clase='rectangulo1' />
				<ContenedorLogo>
					<Logo clase='circulo-logo-icono' />
				</ContenedorLogo>
			</ContenedorRectanguloLogo>
		</ContenedorHabilidades>
	);
};

export default Habilidades;
