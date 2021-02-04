import React from 'react';
import styled from '@emotion/styled';

const ContenedorFooter = styled.footer`
	background-color: #898989;
	position: relative;
	/* z-index: 9999; */
	/* bottom: 0vh; */
	/* right: -200px; */
	/* width: calc(100% - 200px); */
	width: 100%;
	height: 30px;
	/* margin-top: 10px; */
	text-align: center;
	p {
		font-size: 30px;
	}
`;
const Footer = () => {
	let year = new Date().getFullYear();
	return (
		<ContenedorFooter>
			<p>{year} &copy; Otto Gutiérrez. </p>
		</ContenedorFooter>
	);
};

export default Footer;
