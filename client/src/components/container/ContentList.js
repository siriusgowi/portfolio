import React, { Component } from 'react';

// Data
import { data } from '../../data/content.js';

// Components
import TaglineImage from './content/TaglineImage';
import About from './content/About';
import Skills from './content/Skills';
import Projects from './content/Projects';
import Experience from './content/Experience';
import Education from './content/Education';


class ContentList extends Component {

	state = {
		contentList: []
	}


	async componentDidMount() {
		await this.setState({
			contentList: data.content
		});
	}


	render() {
		const { contentList } = this.state;

		return (
			<div className="content-container">
				<TaglineImage contentList={contentList} />
				<About contentList={contentList} />
				<Skills contentList={contentList} />
				<Projects contentList={contentList} />
				<Experience contentList={contentList} />
				<Education contentList={contentList} />

			</div>
		);
	}

};


export default ContentList;