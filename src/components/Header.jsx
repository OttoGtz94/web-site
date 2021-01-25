import React from 'react';
import Menu from './Menu';

const Header = ({ logo }) => {
	return (
		<header>
			<div className='containerLogo'>
				<img src={logo} alt='logo' />
				<h1>
					<span className='name'>Otto</span>{' '}
					<span className='lastname'>Gutiérrez</span>
				</h1>
			</div>
			<div className='containerProfesion'>
				<h2 className='systemComputer'>
					System Computer Engineer
				</h2>
				<h2 className='fullStack'>Full-Stack Developer</h2>
			</div>
			<Menu />
		</header>
	);
};

export default Header;
