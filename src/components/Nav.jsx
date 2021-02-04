import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import BarraBottom from './BarraBottom';
import Cuadrado from './Cuadrado';

const BarraNav = styled.nav`
	/* background-color: blue; */
	width: 100%;
	text-align: right;
	padding: 15px 30px;
	position: fixed;
	top: 0;
	/* height: 50px; */
	/* display: flex;
	flex-wrap: wrap; */
	/* position: fixed;
	top: 0; */
	/* background-color: rgba(#2b2b2b, 0.9); */
	/* background-color: rgba(43, 43, 43, 0.9);
	z-index: 3000; */
	/* justify-content: space-evenly; */
	.barraTop {
		width: 100%;
		display: flex;
		.izq,
		.der {
			height: 50px;
		}
		.izq {
			.rectangulo1,
			.contenedorLogo {
				width: 60%;
			}
		}
	}
`;

// const BarraTop = styled.div`
// 	width: 100%;
// 	background-color: red;
// `;

// const ContenedorLogo = styled.div`
// 	position: relative;
// 	bottom: 100px;
// 	height: 100px;
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: center;
// 	/* background-color: yellow; */
// `;

// const Izquierdo = styled.div`
// 	width: 25%;
// 	/* background-color: yellow; */
// 	display: flex;
// 	justify-content: start;
// 	align-items: center;
// 	padding: 15px 40px;
// `;
// const Derecho = styled.div`
// 	width: 75%;
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// 	padding: 15px 40px;
// 	/* background-color: purple; */
// `;

const Menu = styled.span`
	font-size: 30px;
	color: #f8f8f8;
	transition: 0.5s linear;
	font-size: 50px;
	cursor: pointer;
`;

const Nav = () => {
	return (
		<BarraNav className='barraNav'>
			<Menu className='btn-menu'>
				<FontAwesomeIcon icon={faEllipsisH} />
			</Menu>
		</BarraNav>
	);
};

export default Nav;
