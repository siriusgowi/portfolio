import React, { Component } from 'react';
import '../App.css';
import TaglineDescription from './TaglineDescription';

class TaglineImage extends Component {
	render() {
		return (
			<div className="tagline-image">
				<img src="/images/tagline.JPG" className="img-fluid float-right" alt="Jorge Alvarado" />
				<TaglineDescription />
			</div>
		);
	}
}

export default TaglineImage;