import React, { Fragment, useState } from 'react';
// import { gsap } from 'gsap';
import Nav from './components/Nav';
import Home from './components/Page 1/Home';
import Menu from './components/Menu';
import Habilidades from './components/Page 1/Habilidades';
import Contacto from './components/Page 1/Contacto';
// import Footer from './components/Footer';

function App() {
	const [abrirmenu, guardarAbrirMenu] = useState(false);
	return (
		<Fragment>
			{abrirmenu ? (
				<Menu guardarAbrirMenu={guardarAbrirMenu} />
			) : null}
			{/* <Menu clase='menu' /> */}
			<Nav />
			<Home guardarAbrirMenu={guardarAbrirMenu} />
			<Habilidades />
			<Contacto />
		</Fragment>
	);
}

export default App;
