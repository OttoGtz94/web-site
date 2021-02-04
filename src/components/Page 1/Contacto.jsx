import React from 'react';
import styled from '@emotion/styled';
import { navegar } from '../../Helpers';
import Nav from '../Nav';
import Titulo from '../Titulo';
import BotonNav from '../BotonNav';
import BarraHorizontal from '../BarraBottom';
import Formulario from '../Formulario';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithubSquare,
	faLinkedin,
	faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

const ContenedorContacto = styled.div``;
const Contenido = styled.div`
	width: 100%;
	height: calc(100% + 10px);
	/* height: 100%; */
	display: flex;
	flex-wrap: wrap;
	align-content: flex-end;
`;

const Izquierda = styled.div`
	width: 40%;
	display: flex;
	flex-wrap: wrap;
	align-content: space-between;
	.titulo {
		div {
			display: none;
		}
	}
	.redes-sociales {
		width: 100%;
		text-align: center;
		a {
			text-decoration: none;
			color: #e8e8e8;
			font-size: 40px;
			margin: 20px;
		}
	}
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
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	/* margin-bottom: 10px; */
	height: calc(100% - 50px);
`;

const Contacto = () => {
	return (
		<ContenedorContacto className='seccion' id='contacto'>
			<Contenido>
				<Izquierda>
					<Titulo titulo='Contacto' />
					<div className='redes-sociales'>
						<a href='#null'>
							<FontAwesomeIcon icon={faFacebookSquare} />
						</a>
						<a href='#null'>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a href='#null'>
							<FontAwesomeIcon icon={faGithubSquare} />
						</a>
					</div>
					<div className='contenedor-box'>
						{/* <div className='box box-izq'>
							<BotonNav
								clase='triangulo-abajo'
								navegar={() => navegar('#contacto')}
							/>
						</div> */}
						<div className='box box-der'>
							<BotonNav
								clase='triangulo-arriba'
								navegar={() => navegar('#habilidades')}
							/>
						</div>
					</div>
				</Izquierda>
				<Derecha>
					<Formulario />
				</Derecha>
				<Footer />
			</Contenido>
			<BarraHorizontal />
		</ContenedorContacto>
	);
};

export default Contacto;
