import React from 'react';

// Components
import TaglineImage from './content/TaglineImage';
// import About from './content/About';
// import Skills from './content/Skills';



const ContentList = (props) => {
	const { content } = props.contentList;
	const { tagline } = content;
	//console.log(tagline);

	return (
		<div className="content-container">
			<TaglineImage tagline={tagline} />

		</div>
	);
	
};


export default ContentList;