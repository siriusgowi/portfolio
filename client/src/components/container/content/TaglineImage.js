import React from 'react';




const TaglineImage = (props) => {
	const { content } = props.contentList;

	return (
		<div className="tagline-image">
			{!content ? (<p>Loading</p>) : (

				<div className="tagline-image">
					<img src={`/images/${content.tagline.imgURL}`} className="img-fluid float-right" alt="Jorge Alvarado" />

				</div>

			)}
		</div>
	);
};

export default TaglineImage;