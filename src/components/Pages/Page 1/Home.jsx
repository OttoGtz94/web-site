import React from 'react';
import styled from '@emotion/styled';

import Logo from '../../Logo';
import BarraBottom from '../../BarraBottom';
import Cuadrado from '../../Cuadrado';
import BotonNav from '../../BotonNav';

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

const Home = () => {
	const abrirMenu = () => {
		console.log('Menu');
	};
	return (
		<header>
			<Nav>
				<Menu onClick={abrirMenu}>menu ( )</Menu>
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
