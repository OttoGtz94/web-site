import React from 'react';
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
import Nav from '../Nav';
import Titulo from '../Titulo';
import BarraHorizontal from '../BarraBottom';
import BotonNav from '../BotonNav';
import { navegar } from '../../Helpers';

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

	// tecnologias.forEach(tecnologia =>
	// 	console.log(tecnologia)
	// );

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
							<div>
								<span>
									<FontAwesomeIcon icon={tecnologia} />
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
