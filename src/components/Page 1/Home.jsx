import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { gsap, SteppedEase } from 'gsap';
import { animacionParpadeo } from '../../Helpers';
import Logo from '../Logo';
import BarraBottom from '../BarraBottom';
import Cuadrado from '../Cuadrado';
import BotonNav from '../BotonNav';

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

// const animacionParpadeo = () => {
// 	const animacionBotonAbajo = gsap
// 		.timeline({
// 			defaults: {
// 				duration: 0.5,
// 				delay: 0.2,
// 				yoyo: true,
// 				repeat: -1,
// 				ease: SteppedEase.config(6),
// 			},
// 		})
// 		.from('.triangulo-abajo', {
// 			borderTopColor: '#f8f8f8',
// 		})
// 		.to('.triangulo-abajo', {
// 			borderTopColor: '#0d6d89',
// 		})
// 		.from('.circulo', {
// 			borderColor: '#f8f8f8',
// 		})
// 		.to('.circulo', {
// 			borderColor: '#0d6d89',
// 		});
// 	const boton = document.querySelector('.boton-abajo');
// 	boton.addEventListener('mouseover', () => {
// 		// console.log('pausado');
// 		animacionBotonAbajo.pause();
// 	});
// 	boton.addEventListener('mouseout', () => {
// 		// console.log('play');
// 		animacionBotonAbajo.play();
// 	});
// 	return animacionBotonAbajo;
// };

const Home = ({ guardarAbrirMenu }) => {
	// States
	// const [abrirmenu, guardarAbrirMenu] = useState(false);

	const [visible, guardarVisible] = useState(false);
	const ref = useRef();
	useEffect(() => {
		console.log('Componente cargado');
		window.addEventListener('scroll', scrollHandler, true);
		window.addEventListener('load', animacionParpadeo);
		// if (ref.current.getBoundingClientRect().y > 100) {
		// 	guardarVisible(true);
		// 	alert('y > 100');
		// 	return;
		// }
		guardarVisible(false);
	}, []);

	const scrollHandler = () => {
		let y = ref.current.getBoundingClientRect().y * -1;
		console.log(y);
		if (y < 100) {
			console.log('y es menor a 100');
			// animacionParpadeo();
			return;
		} else if (y > 100) {
			console.log('y es mayor a 100');
			return;
		}
	};

	const irabajo = () => {
		const jumbotron = document.querySelector(
			'#habilidades'
		);
		jumbotron.scrollIntoView({ behavior: 'smooth' });
		// console.log('para abajo');
	};

	return (
		<header className='header' ref={ref} id='header'>
			{visible ? console.log('Y rd mayor a 100') : null}
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
			<BotonNav clase='triangulo-abajo' irabajo={irabajo} />
			<Cuadrado clase='rectangulo2' />
			<BarraBottom />
		</header>
	);
};

export default Home;
