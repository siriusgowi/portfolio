import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


const NavbarOverlay = () => {
	

	return (
		<div className="navbar-overlay shadow" id="navbar-overlay">

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

export default NavbarOverlay;