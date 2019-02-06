import React, { Component } from 'react';
import '../App.css';
import TaglineDescription from './TaglineDescription';

class TaglineImage extends Component {
	render() {
		return (
			<div className="tagline-image">
				<TaglineDescription />
			</div>
		);
	}
}

export default TaglineImage;