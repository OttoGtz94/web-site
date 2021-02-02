import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import Logo from '../../Logo';
import BarraBottom from '../../BarraBottom';
import Cuadrado from '../../Cuadrado';
import BotonNav from '../../BotonNav';

// import { animarCajas } from '../../../Helpers';

const Nav = styled.nav`
	height: 70px;
	width: 100%;
	/* text-align: right; */
	padding: 15px 40px;
	display: flex;
	/* flex-wrap: wrap; */
	/* direction: rtl; */
	direction: ltr;
	justify-content: flex-end;
	align-items: center;
`;
const Menu = styled.span`
	font-size: 30px;
	color: #f8f8f8;
	transition: 0.5s linear;
	&:hover {
		cursor: pointer;
		color: #0d6d89;
	}
`;

const ContenedorInformacion = styled.div`
	width: 50%;
	/* background-color: red; */
	height: calc(100vh - 140px);
	margin: 50px auto 0 auto;
	/* padding: 18px; */
	display: block;
	/* flex-wrap: wrap;
	justify-content: center; */
	text-align: center;
`;

const Nombre = styled.h1`
	font-size: 70px;
	font-weight: 400;
	color: #898989;
	width: 100%;
	/* height: 100px; */
	/* background-color: purple; */
	text-align: center;
	margin-top: 30px;
	padding: 0;
`;

const Profesion = styled.p`
	font-size: 35px;
	color: #e8e8e8;
	/* background-color: yellow; */
	width: 100%;
	text-align: center;
`;

// ANIMACIONES

const animarHeader = () => {
	gsap
		.timeline({
			defaults: {
				duration: 1,
			},
		})
		.from('.header', {
			scale: 0.5,
			opacity: 0,
			y: -100,
		})
		.to('.header', {
			duration: 0.1,
			scale: 1,
			opacity: 1,
			y: 'auto',
		});
	console.log('Animar cajas');
};
const animarBarras = () => {
	gsap
		.timeline({
			defaults: {
				duration: 1,
			},
		})
		.from('.barrasHeader', {
			scaleX: 0.5,
		})
		.to('.barrasHeader', {
			scaleX: 1,
		});
};
const animarCuadros = () => {
	gsap
		.timeline({
			defaults: {
				duration: 1,
			},
		})
		.from('.cuadro', {
			scaleX: 0.1,
		})
		.to('.cuadro', {
			scaleX: 1,
		});
};

const onMouseEnter = () => {
	gsap.to('#menu', {
		color: '#0d6d89',
	});
	console.log('Hover');
};

const onMouseOut = () => {
	gsap.to('#menu', {
		color: '#f8f8f8',
	});
	console.log('Hover');
};

const Home = ({ guardarAbrirMenu }) => {
	// States
	// const [abrirmenu, guardarAbrirMenu] = useState(false);

	useEffect(() => {
		console.log('Componente cargado');
		animarHeader();
		animarBarras();
		animarCuadros();
	});

	return (
		<header className='header'>
			<Nav>
				<Menu
					id='menu'
					onClick={() => {
						guardarAbrirMenu(true);
					}}
					onMouseEnter={() => onMouseEnter()}
					onMouseOut={() => onMouseOut()}
				>
					menu ( )
				</Menu>
			</Nav>
			<BarraBottom />
			{/* <Rectangulo1 /> */}
			<Cuadrado clase='rectangulo1' />
			<Cuadrado clase='cuadrado1' />
			<ContenedorInformacion className='contenedorInformacion'>
				<Logo clase='circulo-logo' />
				<Nombre>OTTO GUTIÉRREZ</Nombre>
				<Profesion>
					Ing. En Sistemas Computacionales
				</Profesion>
				<Profesion>Full-Stack Developer</Profesion>
			</ContenedorInformacion>
			<Cuadrado clase='cuadrado2' />
			<BotonNav clase='triangulo-abajo' />
			<Cuadrado clase='rectangulo2' />
			<BarraBottom />
		</header>
	);
};

export default Home;
