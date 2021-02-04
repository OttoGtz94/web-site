import React from 'react';
import styled from '@emotion/styled';

const BarraHorizontalBottom = styled.div`
	width: 100%;
	height: 10px;
	background-color: #898989;
	/* opacity: 0; */
	/* transform: scaleX(0); */
`;

const BarraHorizontal = () => {
	return (
		<BarraHorizontalBottom className='barrasSeccion'></BarraHorizontalBottom>
	);
};

export default BarraHorizontal;
