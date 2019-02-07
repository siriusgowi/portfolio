import React, { Component } from 'react';
import '../App.css';
import TaglineDescription from './TaglineDescription';

class TaglineImage extends Component {
	render() {
		const imgPath = process.env.PUBLIC_URL + '/images/tagline.jpg';
		return (
			<div className="tagline-image">
				<img src={imgPath} className="img-fluid float-right" alt="Jorge Alvarado" />
				<TaglineDescription />
			</div>
		);
	}
}

export default TaglineImage;