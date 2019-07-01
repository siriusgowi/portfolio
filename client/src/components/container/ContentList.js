import React from 'react';

// Components
import TaglineImage from './content/TaglineImage';
import About from './content/About';
import Skills from './content/Skills';



const ContentList = (props) => {
	const { content } = props.contentList;
	const { tagline, about, skills } = content;

	return (
		<div className="content-container">
			<TaglineImage tagline={tagline} />
			<About about={about} />
			<Skills skills={skills} />
		</div>
	);
	
};


export default ContentList;