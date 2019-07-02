import React from 'react';

// Components
//import TaglineImage from './content/TaglineImage';
import About from './content/About';
// import Skills from './content/Skills';



const ContentList = (props) => {
	const { content } = props.contentList;
	const { about } = content;

	return (
		<div className="content-container">

			<About about={about} />

		</div>
	);
	
};


export default ContentList;