import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import SidebarContainer from './SidebarContainer';
import ContentContainer from './ContentContainer';
import NavbarOverlay from './NavbarOverlay';

class WebsiteContainer extends Component {
  render() {
    return (
    	<Router>
	        <div className="website-container">
	          <SidebarContainer />
	          <ContentContainer />
            <NavbarOverlay />
	        </div>
        </Router>
    );
  }
}

export default WebsiteContainer;
