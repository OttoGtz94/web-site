import React from 'react';
import styled from '@emotion/styled';
import Nav from '../Nav';
import Titulo from '../Titulo';
import Cuadrado from '../Cuadrado';
import BarraHorizontal from '../BarraBottom';
import BotonNav from '../BotonNav';

const ContenedorHabilidades = styled.div`
	width: 100%;
	height: 100vh;
	.rectangulo1 {
		/* background-color: red; */
		position: static;
	}
`;

const Contenido = styled.div`
	width: 100%;
	/* background-color: blueviolet; */
	height: calc(100% - 110px);
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
const Izquierda = styled.div`
	width: 40%;
	height: 100%;
	/* background-color: green; */
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	.contenedor-box {
		width: 100%;
		/* background-color: yellow; */
		/* display: flex;
		flex-wrap: wrap;
		justify-content: space-between; */
		display: inline-flex;
		.box {
			width: 200px;
			height: 200px;
			background-color: #262626;
			/* border: 1px solid wheat; */
			/* margin-top: 5vh; */
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.circulo {
				position: static;
			}
		}
	}
`;

const Derecha = styled.div`
	width: 60%;
	background-color: blue;
`;

const Habilidades = () => {
	return (
		<ContenedorHabilidades id='habilidades'>
			<Nav />
			<Contenido>
				<Izquierda>
					<Titulo titulo='Mis habilidades & Conocimientos' />
					<div className='contenedor-box'>
						<div className='box box-izq'>
							<BotonNav clase='triangulo-abajo' />
						</div>
						<div className='box box-der'>
							<BotonNav clase='triangulo-arriba' />
						</div>
					</div>
				</Izquierda>
				<Derecha>
					<h1>Derecha</h1>
				</Derecha>
			</Contenido>
			<BarraHorizontal />
		</ContenedorHabilidades>
	);
};

export default Habilidades;
