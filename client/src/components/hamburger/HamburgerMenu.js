import React, { Component } from 'react';
import '../../css/App.css';
import { GiHamburgerMenu } from 'react-icons/gi';


class HamburgerMenu extends Component {
	

	render() {
		return (
			<div className="hamburger-menu shadow" id="hamburger-menu">

				<div className="row">
					<div className="col-1 pt-2 ml-2">
						<GiHamburgerMenu />
					</div>
					<div className="col-10">
						<p className="nav-name">Jorge Alvarado</p>
						<p className="nav-title">Full Stack Developer</p>
					</div>
				</div>

			</div>
		);
	}
}

export default HamburgerMenu;