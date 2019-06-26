import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LogoArea from './LogoArea';

// Icons
import { FaUserSecret } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import { FaClipboardList } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';
import { IoMdSchool } from 'react-icons/io';
import { IoIosMail } from 'react-icons/io';


const SidebarList = () => {


	return (
		<div className="sidebar-container">
			<LogoArea />
			<div className="sidebar-list">
				<ul className="list-group">

					<li className="list list-group-item">
						<Link to="#" className="float-left">
							<FaUserSecret />
							<span className="link-name">About</span>
						</Link>
					</li>
					<li className="list list-group-item">
						<Link to="#" className="float-left">
							<GoTools />
							<span className="link-name">Skills</span>
						</Link>
					</li>
					<li className="list list-group-item">
						<Link to="#" className="float-left">
							<FaClipboardList />
							<span className="link-name">Projects</span>
						</Link>
					</li>
					<li className="list list-group-item">
						<Link to="#" className="float-left">
							<IoMdTrendingUp />
							<span className="link-name">Experience</span>
						</Link>
					</li>
					<li className="list list-group-item">
						<Link to="#" className="float-left">
							<IoMdSchool />
							<span className="link-name">Education</span>
						</Link>
					</li>
					<li className="list list-group-item">
						<Link to="#" className="float-left">
							<IoIosMail />
							<span className="link-name">Contact</span>
						</Link>
					</li>

					<li className="list list-group-item blank-list"></li>

				</ul>
			</div>
		</div>
	);
	
};


export default SidebarList;