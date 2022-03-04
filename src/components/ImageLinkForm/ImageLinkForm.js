import React, { Component } from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className = 'f3'>This magic brain detect faces. Give it a try</p>
			<div className = 'center'>
				<div className = 'pattern wid center pa3 shadow-5 br3'>
					<input className = 'f4 pa2 w-70 center' type = 'tex' onChange = { onInputChange }/>
					<button className = 'f4 w-30 grow white bg-light-purple' onClick = { onButtonSubmit }>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;