import React, { Fragment } from 'react';
import Logo from './images/dibujo.svg';
import Header from './components/Header';
// import Menu from './components/Menu';
import AboutMe from './components/AboutMe';

function App() {
	return (
		<Fragment>
			<Header logo={Logo} />
			{/* <Menu /> */}
			<AboutMe />
		</Fragment>
	);
}

export default App;
