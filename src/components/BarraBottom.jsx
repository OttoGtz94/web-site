import React from 'react';
import styled from '@emotion/styled';

const BarraHorizontal = styled.div`
	width: 100%;
	height: 10px;
	background-color: #898989;
`;

const BarraBottom = () => {
	return (
		<BarraHorizontal id='barraHeaderTop'></BarraHorizontal>
	);
};

export default BarraBottom;
