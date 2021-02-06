import React, {
	Fragment,
	useState,
	useEffect,
} from 'react';
// import { gsap } from 'gsap';
import {
	animacionMenu,
	animacionNombre,
	animacionLogo,
	animacionIconoPC,
	animacionIconos,
} from './animations/animations';
import Nav from './components/Nav';
import Home from './components/Page 1/Home';
// import Menu from './components/Menu';
import Habilidades from './components/Page 1/Habilidades';
import Contacto from './components/Page 1/Contacto';
// import Footer from './components/Footer';

function App() {
	const [abrirmenu, guardarAbrirMenu] = useState(false);
	const [visible, guardarVisible] = useState(false);

	const scrollHandler = _ => {
		console.log(document.documentElement.scrollTop);
		if (
			document.documentElement.scrollTop >= 658 &&
			document.documentElement.scrollTop < 1318
		) {
			guardarVisible(true);
			// animacionIconoPC();
			// animacionIconos();
			return;
		}
		guardarVisible(false);
	};
	useEffect(() => {
		window.addEventListener(
			'load',
			animacionMenu,
			animacionNombre(),
			animacionLogo()
		);
		window.addEventListener('scroll', scrollHandler);
		if (visible) {
			animacionIconos(visible);
			animacionIconoPC();
			return;
		}
		animacionIconos(visible);
	});

	return (
		<Fragment>
			{/* {abrirmenu ? (
				<Menu guardarAbrirMenu={guardarAbrirMenu} />
			) : null} */}
			{/* <Menu clase='menu' /> */}
			<Nav />
			<Home guardarAbrirMenu={guardarAbrirMenu} />
			<Habilidades />
			<Contacto />
		</Fragment>
	);
}

export default App;
