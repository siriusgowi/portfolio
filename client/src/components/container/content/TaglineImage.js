import React from 'react';



const TaglineImage = (props) => {
	const { imgURL, imgAlt } = props.tagline;

	return (
		<div className="tagline-image">
			<img src={imgURL} className="img-fluid float-right" alt={imgAlt} />
		</div>
	);
}

export default TaglineImage;