import React, { useState } from 'react';
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
	const [error, guardarError] = useState(false);
	const [datos, guardarDatos] = useState({
		nombre: '',
		correo: '',
		mensaje: '',
	});

	const { nombre, correo, mensaje } = datos;
	const leerFormulario = e => {
		guardarDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	const enviarFormulario = e => {
		e.preventDefault();
		console.log(datos);
		if (
			nombre.trim() === '' ||
			correo.trim() === '' ||
			mensaje.trim() === ''
		) {
			guardarError(true);
			return;
		}
		guardarError(false);
		guardarDatos({
			nombre: '',
			correo: '',
			mensaje: '',
		});
	};
	return (
		<ContenedorFormulario onSubmit={enviarFormulario}>
			{error ? (
				<p>Todos los campos son obligatorios</p>
			) : null}
			<input
				type='text'
				name='nombre'
				id=''
				placeholder='Ingresa tu nombre'
				onChange={leerFormulario}
				value={nombre}
			/>
			<input
				type='email'
				name='correo'
				id=''
				placeholder='Ingresa tu correo'
				onChange={leerFormulario}
				value={correo}
			/>
			<textarea
				name='mensaje'
				id=''
				cols='30'
				rows='10'
				onChange={leerFormulario}
				placeholder='Escribe tu mensaje'
				value={mensaje}
			></textarea>
			<button type='submit'>Enviar</button>
		</ContenedorFormulario>
	);
};

export default Formulario;
