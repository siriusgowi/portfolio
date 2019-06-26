import React from 'react';
import tagline from '../../images/tagline.jpg';




const TaglineImage = () => {


		return (
			<div className="tagline-image">
				<img src={tagline} className="img-fluid float-right" alt="Jorge Alvarado" />
			</div>
		);
}

export default TaglineImage;