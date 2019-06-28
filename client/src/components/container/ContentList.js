import React from 'react';

// Components
import TaglineImage from './TaglineImage';
import About from './content/About';
import Skills from './content/Skills';



const ContentList = (props) => {
	const { content } = props.contentList;
	const { about, skills } = content;

	return (
		<div className="content-container">
  			<TaglineImage />
  			<div>
  				<About about={about} />
  				<Skills skills={skills} />
  			</div>
		</div>
	);
	
};


export default ContentList;