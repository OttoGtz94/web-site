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

const animarCajas = () => {
	// gsap.to('.rectangulo1', {
	// 	duration: 5,
	// 	x: 400,
	// });
	gsap
		.timeline({
			defaults: {
				duration: 1,
				delay: 0.1,
			},
		})
		.to('.rectangulo1', {
			x: 400,
		})
		.to('.cuadrado1', {
			y: 80,
		})
		.to('#barraHeaderTop', {
			opacity: 0,
		});
	console.log('Animar cajas');
};

const Home = ({ guardarAbrirMenu }) => {
	// States
	// const [abrirmenu, guardarAbrirMenu] = useState(false);

	useEffect(() => {
		console.log('Componente cargado');
		animarCajas();
	});

	return (
		<header>
			<Nav>
				<Menu onClick={() => guardarAbrirMenu(true)}>
					menu ( )
				</Menu>
			</Nav>
			<BarraBottom />
			{/* <Rectangulo1 /> */}
			<Cuadrado clase='rectangulo1' />
			<Cuadrado clase='cuadrado1' />
			<ContenedorInformacion>
				<Logo />
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
