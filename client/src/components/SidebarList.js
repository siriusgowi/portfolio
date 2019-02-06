import React, { Component } from 'react';
import '../App.css';
import Sidebar from './Sidebar';

class SidebarList extends Component {
	render() {
		return (
			<div className="sidebar-list">
				<h3>Inside SidebarList</h3>
				<Sidebar />
				<Sidebar />
			</div>
		);
	}

}

export default SidebarList;