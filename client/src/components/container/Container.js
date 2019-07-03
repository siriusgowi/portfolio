import React from 'react';

// Components
import SidebarList from './SidebarList';
import ContentList from './ContentList';
import NavbarOverlay from './NavbarOverlay';




const Container = () => {

	return (
		<div className="website-container">
			<SidebarList />
			<ContentList />
			<NavbarOverlay />
		</div>
	);

}

export default Container;

