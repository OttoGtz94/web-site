import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3Alt,
	faJs,
	faReact,
	faNodeJs,
	faSass,
	faLinux,
	faGithubSquare,
	faWindows,
	faJava,
	faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Titulo from '../Titulo';
import BarraHorizontal from '../BarraBottom';
import BotonNav from '../BotonNav';
import { navegar } from '../../Helpers';
// import { animacionIconoPC } from '../../animations/animations';

const ContenedorHabilidades = styled.div`
	/* width: 100%;
	height: 100vh;
	padding: 20px 0; */
	.rectangulo1 {
		/* background-color: red; */
		position: static;
	}
	/* .barrasSeccion {
		position: absolute;
		bottom: 0;
	} */
`;

const Contenido = styled.div`
	width: 100%;
	/* background-color: blueviolet; */
	/* height: calc(100% - 110px); */
	height: calc(100% + 10px);
	/* height: 100%; */
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
	/* align-items: flex-end; */
	align-content: space-between;
	.contenedor-box {
		width: 100%;

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
	/* background-color: blue; */
	.contenedorIconos {
		/* background-color: red; */
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		/* align-content: center; */
		width: 100%;
		div {
			/* background-color: white; */
			width: 30%;
			text-align: center;
			/* margin: 10px; */
			span {
				color: #898989;
				font-size: 90px;
			}
		}
	}
`;

const Habilidades = () => {
	const tecnologias = [
		faHtml5,
		faCss3Alt,
		faJs,
		faReact,
		faNodeJs,
		faJava,
		faBootstrap,
		faSass,
		faLinux,
		faWindows,
		faDatabase,
		faGithubSquare,
	];
	let n = 0;

	// useEffect(() => {
	// 	window.addEventListener('load', animacionIconoPC());
	// 	// window.addEventListener('scroll', scrollHandler, true);
	// }, []);

	return (
		<ContenedorHabilidades
			id='habilidades'
			className='seccion'
		>
			{/* <Nav /> */}
			<Contenido>
				<Izquierda>
					<Titulo titulo='Mis habilidades & Conocimientos' />
					<div className='contenedor-box'>
						<div className='box box-izq'>
							<BotonNav
								clase='triangulo-abajo'
								navegar={() => navegar('#contacto')}
							/>
						</div>
						<div className='box box-der'>
							<BotonNav
								clase='triangulo-arriba'
								navegar={() => navegar('#home')}
							/>
						</div>
					</div>
				</Izquierda>
				<Derecha>
					<div className='contenedorIconos'>
						{tecnologias.map(tecnologia => (
							<div key={tecnologia.iconName}>
								<span>
									<FontAwesomeIcon
										icon={tecnologia}
										className={`iconoHabilidad iconoHabilidad${(n =
											n + 1)}`}
									/>
								</span>
							</div>
						))}
					</div>
				</Derecha>
			</Contenido>
			<BarraHorizontal />
		</ContenedorHabilidades>
	);
};

export default Habilidades;
