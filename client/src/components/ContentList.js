import React, { Component } from 'react';
import '../App.css';
import Content from './Content';

class ContentList extends Component {
	render() {
		return (
			<div className="content-list">
				<h3>Inside ContentList</h3>
				<Content />
			</div>
		);
	}
}

export default ContentList;