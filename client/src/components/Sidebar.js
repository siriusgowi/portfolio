import React, { Component } from 'react';
import '../App.css';

class Sidebar extends Component {
	render() {
		return (
			<>
				<li className="list list-group-item">
					<a href="#" className="float-left">
						<this.props.iconName />
						<span className="link-name">{this.props.linkName}</span>
					</a>
				</li>
			</>
		);
	}
}

export default Sidebar;