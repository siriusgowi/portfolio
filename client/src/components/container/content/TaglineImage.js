import React from 'react';




const TaglineImage = (props) => {
	const { tagline } = props.contentList;


	return (
		<div className="tagline-image">
			{!tagline ? "(<p>Loading...</p>)" : (

				<div className="tagline-image">
					<img src={`/images/${tagline.imgURL}`} className="img-fluid float-right" alt="Jorge Alvarado" />

				</div>

			)}
		</div>
	);
};

export default TaglineImage;