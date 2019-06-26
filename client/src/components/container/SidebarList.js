import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LogoArea from './LogoArea';




const SidebarList = (props) => {


	return (
		<div className="sidebar-container">
			<LogoArea />
			<div className="sidebar-list">
				<ul className="list-group">

					<li className="list list-group-item">
						<Link to="#" className="float-left">
							<span className="link-name"></span>
						</Link>
					</li>

					<li className="list list-group-item blank-list"></li>
				</ul>
			</div>
		</div>
	);
	
};


export default SidebarList;