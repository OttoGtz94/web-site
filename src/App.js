import React, { Fragment, useState } from 'react';
// import { gsap } from 'gsap';
import Home from './components/Page 1/Home';
import Menu from './components/Menu';
import Habilidades from './components/Page 1/Habilidades';

function App() {
	const [abrirmenu, guardarAbrirMenu] = useState(false);
	return (
		<Fragment>
			{abrirmenu ? (
				<Menu guardarAbrirMenu={guardarAbrirMenu} />
			) : null}
			{/* <Menu clase='menu' /> */}
			<Home guardarAbrirMenu={guardarAbrirMenu} />
			<Habilidades />
		</Fragment>
	);
}

export default App;
