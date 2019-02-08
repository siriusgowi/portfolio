import React, { Component } from 'react';
import '../App.css';
import LogoArea from './LogoArea';
import SidebarList from './SidebarList';


class SidebarContainer extends Component {
	render() {
		return (
			<div className="sidebar-container">
				<LogoArea />
				<SidebarList />
			</div>
		);
	}
}

export default SidebarContainer;