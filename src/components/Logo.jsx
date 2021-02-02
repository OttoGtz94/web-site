import React from 'react';

const Logo = ({ clase }) => {
	const logoTerminal = '>_';
	return (
		<div className={clase}>
			<p className='terminal-logo'>{logoTerminal}</p>
		</div>
	);
};

export default Logo;
