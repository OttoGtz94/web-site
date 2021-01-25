import React, { Fragment } from 'react';
import Logo from './images/dibujo.svg';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
	return (
		<Fragment>
			<Header logo={Logo} />
			<Menu />
		</Fragment>
	);
}

export default App;
