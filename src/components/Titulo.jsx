import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const ContenedorTitulo = styled.div`
	/* background-color: red; */
	width: 100%;
	padding: 10px;
	text-align: center;
	h3 {
		color: #e8e8e8;
		font-size: 55px;
		width: 100%;
		/* background-color: green; */
		/* padding: 10px; */
	}
	div {
		width: 100%;
		/* background-color: yellow; */
		text-align: center;
		a {
			text-decoration: none;
			color: #e8e8e8;
			font-size: 40px;
			margin: 0 auto;
			/* background-color: blue; */
		}
	}
`;

const Titulo = ({ titulo }) => {
	return (
		<ContenedorTitulo>
			<h3>{titulo}</h3>
			<div>
				<a href='#null'>
					<FontAwesomeIcon icon={faDesktop} />
				</a>
			</div>
		</ContenedorTitulo>
	);
};

export default Titulo;
