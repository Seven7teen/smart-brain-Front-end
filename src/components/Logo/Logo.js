import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className="pad">
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
			 	<div className="Tilt-inner">
			 		<img style={{paddingTop: '10px'}} alt='logo' src = {brain}/>
			 	</div>
			</Tilt>
		</div>
	);
}

export default Logo;