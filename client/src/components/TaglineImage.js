import React, { Component } from 'react';
import tagline from '../tagline.jpg';
import '../App.css';
import TaglineDescription from './TaglineDescription';

class TaglineImage extends Component {
	render() {
		return (
			<div className="tagline-image">
				<img src={tagline} className="img-fluid float-right" alt="Jorge Alvarado" />
				<TaglineDescription />
			</div>
		);
	}
}

export default TaglineImage;