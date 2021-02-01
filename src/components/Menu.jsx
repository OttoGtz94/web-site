import React from 'react';
import styled from '@emotion/styled';
import { obtenerYear } from '../Helpers';
import Logo from './Logo';
import BarraBottom from './BarraBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithubSquare,
	faLinkedin,
	faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

const ContenedorMenu = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.9);
	position: absolute;
	z-index: 100;
	padding: 30px;
	transition: 5s linear;
	/* display: flex;
	flex-wrap: wrap;
	justify-content: space-around; */
`;
const ContenedorLogoYBoton = styled.div`
	width: 100%;
	/* background-color: purple; */
	display: flex;
`;

const ContenedorLogo = styled.div`
	width: 30%;
	/* background-color: green; */
	display: flex;
	justify-content: flex-start;
	align-items: center;
	a {
		text-decoration: none;
		.circulo-logo {
			margin: 0;
		}
	}
`;

const CotenedorBotonCerrar = styled.div`
	width: 70%;
	/* background-color: yellow; */
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const BotonCerrar = styled.p`
	color: #f8f8f8;
	font-size: 60px;
	font-weight: 800;
	cursor: pointer;
	/* background-color: red; */
	width: 80px;
	height: 80px;
	text-align: center;
	transition: 0.5s linear;
	&:hover {
		color: #c70079;
	}
`;

const ContenedorLista = styled.ul`
	width: 100%;
	/* background-color: red; */
	padding: 55px 0;
`;

const ElementoLista = styled.li`
	font-size: 35px;
	font-weight: 800;
	list-style: none;
	margin: 0px 0 20px 0;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	a {
		/* background-color: red; */
		color: #f8f8f8;
		text-decoration: none;
		transition: 0.5s linear;
		width: 100%;
		&:hover {
			color: #0d6d89;
		}
	}
`;

const PieMenu = styled.div`
	/* background-color: red; */
	width: 100%;
	display: flex;
	flex-wrap: wrap;

	p {
		font-size: 30px;
		color: #f8f8f8;
		width: 70%;
	}
	div {
		width: 30%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		a {
			text-decoration: none;
			font-size: 50px;
			color: #898989;
			margin: 0 10px;
			transition: 0.8s linear;
			&:hover {
				color: #f8f8f8;
			}
		}
	}
`;

const Menu = ({ guardarAbrirMenu }) => {
	let year = new Date().getFullYear();
	console.log(year);
	return (
		<ContenedorMenu>
			<ContenedorLogoYBoton>
				<ContenedorLogo>
					<a
						href='#'
						onClick={() => guardarAbrirMenu(false)}
					>
						<Logo />
					</a>
				</ContenedorLogo>
				<CotenedorBotonCerrar>
					<BotonCerrar
						onClick={() => {
							guardarAbrirMenu(false);
						}}
					>
						x
					</BotonCerrar>
				</CotenedorBotonCerrar>
			</ContenedorLogoYBoton>
			<ContenedorLista>
				<ElementoLista href='#'>
					<a href='#'>Habilidades & Conocimientos</a>
					<BarraBottom />
				</ElementoLista>

				<ElementoLista>
					<a href='#'>Contacto</a>
					<BarraBottom />
				</ElementoLista>

				<ElementoLista>
					<a href='#'>Portafolio</a>
					<BarraBottom />
				</ElementoLista>

				<ElementoLista>
					<a href='#'>Blog</a>
					<BarraBottom />
				</ElementoLista>
			</ContenedorLista>
			<PieMenu>
				<p>{year} &copy; Otto Gutiérrez. </p>
				<div>
					<a href='#'>
						<FontAwesomeIcon icon={faGithubSquare} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faFacebookSquare} />
					</a>
				</div>
			</PieMenu>
		</ContenedorMenu>
	);
};

export default Menu;
