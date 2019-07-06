import React, { Component } from 'react';

// Data
import { data } from '../data/data.js';

// Components
import TaglineImage from './TaglineImage';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';


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
			<main className="content-container" data-spy="scroll" data-target="#list-example" data-offset="0" >
				<TaglineImage contentList={contentList} />
				<About contentList={contentList} />
				<Skills contentList={contentList} />
				<Projects contentList={contentList} />
				<Experience contentList={contentList} />
				<Education contentList={contentList} />
				<Contact contentList={contentList} />
			</main>
		);
	}

};


export default ContentList;