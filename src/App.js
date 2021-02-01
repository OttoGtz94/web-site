import React, { Fragment, useState } from 'react';
import Home from './components/Pages/Page 1/Home';
import Menu from './components/Menu';

function App() {
	const [abrirmenu, guardarAbrirMenu] = useState(false);
	return (
		<Fragment>
			{abrirmenu ? (
				<Menu guardarAbrirMenu={guardarAbrirMenu} />
			) : null}
			<Home guardarAbrirMenu={guardarAbrirMenu} />
		</Fragment>
	);
}

export default App;
