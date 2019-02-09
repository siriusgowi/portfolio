import React, { Component } from 'react';
import '../App.css';
import Sidebar from './Sidebar';

/* REACT ICONS */
import { FaUserSecret } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import { FaClipboardList } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';



class SidebarList extends Component {
	render() {
		return (
			<div className="sidebar-list">
				<ul className="list-group">
					<Sidebar
						iconName={FaUserSecret}
						linkName="About" />
					<Sidebar
						iconName={GoTools}
						linkName="Skills" />
					<Sidebar
						iconName={FaClipboardList}
						linkName="Projects" />
					<Sidebar
						iconName={IoMdTrendingUp}
						linkName="Experience" />
					<Sidebar
						iconName={IoMdSchool}
						linkName="Education" />
					<Sidebar
						iconName={IoIosMail}
						linkName="Contact" />
				</ul>
			</div>
		);
	}

}

export default SidebarList;