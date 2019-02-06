import React, { Component } from 'react';
import '../App.css';
import TaglineImage from './TaglineImage';
import ContentList from './ContentList';


class ContentContainer extends Component {
  render() {
  	return (
  		<div className="content-container">
  			<h2>Inside ContentContainer</h2>
  			<TaglineImage />
  			<ContentList />
  		</div>
  	);
  }
}

export default ContentContainer;