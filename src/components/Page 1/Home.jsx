import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { animacionParpadeo, navegar } from '../../Helpers';
import Logo from '../Logo';
import BarraBottom from '../BarraBottom';
import Cuadrado from '../Cuadrado';
import BotonNav from '../BotonNav';

const ContenedorHeader = styled.header`
	/* width: 100%;
	height: 100vh;
	padding: 20px 0; */
	.cuadrado2 {
		top: calc(100vh - 210px);
		position: absolute;
	}
	.barrasSeccion {
		position: absolute;
		bottom: 0;
	}
`;

const ContenedorInformacion = styled.div`
	width: 50%;
	height: calc(100vh - 120px);
	margin: 50px auto 0 auto;
	display: block;
	text-align: center;
`;

const Nombre = styled.h1`
	font-size: 70px;
	font-weight: 400;
	color: #898989;
	width: 100%;
	text-align: center;
	margin-top: 30px;
	padding: 0;
`;

const Profesion = styled.p`
	font-size: 35px;
	color: #e8e8e8;
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

const Home = ({ guardarAbrirMenu }) => {
	// States

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
	return (
		<ContenedorHeader
			className='seccion'
			ref={ref}
			id='home'
		>
			{visible ? console.log('Y rd mayor a 100') : null}
			{/* <Nav>
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
			</Nav> */}
			{/* <BarraBottom /> */}
			{/* <Rectangulo1 /> */}
			{/* <Cuadrado clase='rectangulo1' /> */}
			{/* <Cuadrado clase='cuadrado1' /> */}
			<ContenedorInformacion className='contenedorInformacion'>
				<Logo clase='circulo-logo' />
				<Nombre>OTTO GUTIÉRREZ</Nombre>
				<Profesion>
					Ing. En Sistemas Computacionales
				</Profesion>
				<Profesion>Full-Stack Developer</Profesion>
			</ContenedorInformacion>
			<Cuadrado clase='cuadrado2' />
			<BotonNav
				clase='triangulo-abajo'
				navegar={() => navegar('#habilidades')}
			/>
			{/* <Cuadrado clase='rectangulo2' /> */}
			<BarraBottom />
		</ContenedorHeader>
	);
};

export default Home;
