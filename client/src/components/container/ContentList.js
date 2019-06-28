import React from 'react';

// Components
import About from './content/About';
import Skills from './content/Skills';



const ContentList = (props) => {
	const { content } = props.contentList;
	const { tagline, about, skills } = content;
	console.log(content);

	return (
		<div className="content-container">

			<div className="tagline-image">
				<img src={tagline.imgURL} className="img-fluid float-right" alt={tagline.imgAlt} />
			</div>

  			<div>
  				<About about={about} />
  				<Skills skills={skills} />
  			</div>
		</div>
	);
	
};


export default ContentList;