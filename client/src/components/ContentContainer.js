import React, { Component } from 'react';
import '../App.css';
import TaglineImage from './TaglineImage';
import ContentList from './ContentList';


class ContentContainer extends Component {
  render() {
  	return (
  		<div className="content-container">
  			<TaglineImage />
  			<ContentList />
  		</div>
  	);
  }
}

export default ContentContainer;