import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import SidebarContainer from './SidebarContainer';
import ContentContainer from './ContentContainer';


class WebsiteContainer extends Component {
  render() {
    return (
    	<Router>
	        <div className="website-container">
	          <SidebarContainer />
	          <ContentContainer />
	        </div>
        </Router>
    );
  }
}

export default WebsiteContainer;
