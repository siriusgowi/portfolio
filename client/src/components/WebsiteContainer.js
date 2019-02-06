import React, { Component } from 'react';
import '../App.css';
import SidebarContainer from './SidebarContainer';
import ContentContainer from './ContentContainer';


class WebsiteContainer extends Component {
  render() {
    return (
        <div className="website-container">
          <SidebarContainer />
          <ContentContainer />
        </div>
    );
  }
}

export default WebsiteContainer;
