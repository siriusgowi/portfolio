import React, { Component } from 'react';
import '../App.css';
import SidebarContainer from './SidebarContainer';
import ContentContainer from './ContentContainer';


class WebsiteContainer extends Component {
  render() {
    return (
        <div className="website-container">
          <h1>Inside WebsiteContainer</h1>
          <SidebarContainer />
          <ContentContainer />
        </div>
    );
  }
}

export default WebsiteContainer;
