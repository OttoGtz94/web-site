import React from 'react';
import styled from '@emotion/styled';

const ContenedorFormulario = styled.form`
	width: 70%;
	background-color: rgba(27, 27, 27, 0.9);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	input,
	button,
	textarea {
		width: 80%;
		height: 50px;
		margin: 20px;
		font-size: 25px;
	}
	input {
		border-top: solid 1px transparent;
		border-left: solid 1px transparent;
		border-right: solid 1px transparent;
		border-bottom: solid 10px #f8f8f8;
		background-color: rgba(0, 0, 0, 0.2);
		padding: 15px 30px;
		color: #f8f8f8;
	}
	textarea {
		height: 200px;
		max-width: 80%;
		max-height: 200px;
		min-width: 80%;
		min-height: 200px;
		border-top: solid 1px transparent;
		border-left: solid 1px transparent;
		border-right: solid 1px transparent;
		border-bottom: solid 10px #f8f8f8;
		background-color: rgba(0, 0, 0, 0.2);
		color: #f8f8f8;
		padding: 15px 30px;
		font-size: 20px;
	}
	button {
		border-radius: 5px;
		border: 2px solid #f8f8f8;
		background-color: transparent;
		color: #f8f8f8;
	}
`;

const Formulario = () => {
	return (
		<ContenedorFormulario>
			<input
				type='text'
				name='nombre'
				id=''
				placeholder='Ingresa tu nombre'
			/>
			<input
				type='email'
				name='correo'
				id=''
				placeholder='Ingresa tu correo'
			/>
			<textarea
				name='mensaje'
				id=''
				cols='30'
				rows='10'
			></textarea>
			<button>Enviar</button>
		</ContenedorFormulario>
	);
};

export default Formulario;
