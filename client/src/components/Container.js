import React from 'react';

// Components
import SidebarList from './SidebarList';
import ContentList from './ContentList';
import NavbarOverlay from './NavbarOverlay';




const Container = () => {

	return (
		<div className="website-container">
			<NavbarOverlay />
			<SidebarList />
			<ContentList />
		</div>
	);

}

export default Container;

