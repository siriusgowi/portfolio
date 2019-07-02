import React from 'react';
// Images
//import taglineImg from '../../../images/tagline.jpg';



const TaglineImage = (props) => {
	const { imgAlt, imgURL } = props.tagline;


	return (
		<div className="tagline-image">
			<img src={`/images/${imgURL}`} className="img-fluid float-right" alt={imgAlt} />
		</div>
	);
};

export default TaglineImage;