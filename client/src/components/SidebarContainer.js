import React, { Component } from 'react';
import '../App.css';
import LogoArea from './LogoArea';
import SidebarList from './SidebarList';


class SidebarContainer extends Component {
	render() {
		return (
			<div className="sidebar-container">
				<h2>Inside SidebarContainer</h2>
				<LogoArea />
				<SidebarList />
			</div>
		);
	}
}

export default SidebarContainer;