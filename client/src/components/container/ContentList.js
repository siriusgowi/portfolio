import React, { Component } from 'react';
//import axios from 'axios';

// Data
import { data } from '../../data/content.js';

// Components
import TaglineImage from './content/TaglineImage';
// import About from './content/About';
// import Skills from './content/Skills';


class ContentList extends Component {

	state = {
		contentList: []
	}


	async componentDidMount() {
		//console.log(data);

		//console.log(this.state);
		await this.setState({
			contentList: data
		});
		//console.log(this.state);
	}


	render() {
		const { contentList } = this.state;

		//console.log(contentList);
		return (
			<div className="content-container">
				<TaglineImage contentList={contentList} />
				
			</div>
		);
	}

};


export default ContentList;