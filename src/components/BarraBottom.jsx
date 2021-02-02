import React from 'react';
import styled from '@emotion/styled';

const BarraHorizontal = styled.div`
	width: 100%;
	height: 10px;
	background-color: #898989;
	/* opacity: 0; */
	/* transform: scaleX(0); */
`;

const BarraBottom = () => {
	return (
		<BarraHorizontal className='barrasHeader'></BarraHorizontal>
	);
};

export default BarraBottom;
