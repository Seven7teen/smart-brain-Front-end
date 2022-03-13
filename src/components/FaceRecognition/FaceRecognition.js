import React, { Component } from 'react';
import './FaceRecognition.css';
import 'tachyons';

const FaceRecognition = ({imageUrl, box}) => {
	return (
		<div className = 'center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
				<div className='bounding-box' style={{top: box.top, bottom: box.bottom, left: box.left, right: box.right}} ></div>
			</div>
		</div>
	);
}

export default FaceRecognition;