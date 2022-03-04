import React, { Component } from 'react';
import './Navigation.css';

const Navigation = ({isSignedIn ,onRouteChange}) => {
	if(isSignedIn) {
		return (
			<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
			<h1 onClick = {() => onRouteChange('signout')} className = 'f4'>Sign Out</h1>
			</nav>
		);
	}
	else {
		return (
			<nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
				<h1 onClick = {() => onRouteChange('signin')} className = 'f4'>Sign In</h1>
				<h1 onClick = {() => onRouteChange('register')} className = 'f4'>Register</h1>
			</nav>
		);
	}
}

export default Navigation;