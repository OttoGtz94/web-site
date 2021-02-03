import React from 'react';
import styled from '@emotion/styled';
import Logo from './Logo';
import Cuadrado from './Cuadrado';

const BarraNav = styled.nav`
	/* background-color: red; */
	width: 100%;
	height: 100px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	.izq,
	.der {
		height: 100px;
	}
	.izq {
		.rectangulo1,
		.contenedorLogo {
			width: 60%;
		}
	}
`;

const ContenedorLogo = styled.div`
	position: relative;
	bottom: 100px;
	height: 100px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Izquierdo = styled.div`
	width: 50%;
`;
const Derecho = styled.div`
	width: 50%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 15px 40px;
`;

const Menu = styled.span`
	font-size: 30px;
	color: #f8f8f8;
	transition: 0.5s linear;
	cursor: pointer;
`;

const Nav = () => {
	return (
		<BarraNav>
			<Izquierdo className='izq'>
				<Cuadrado clase='rectangulo1' />
				<ContenedorLogo className='contenedorLogo'>
					<Logo clase='circulo-logo-icono' />
				</ContenedorLogo>
			</Izquierdo>
			<Derecho className='der'>
				<Menu>menu ( )</Menu>
			</Derecho>
		</BarraNav>
	);
};

export default Nav;
