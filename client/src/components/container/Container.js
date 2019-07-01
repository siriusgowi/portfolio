import React, { Component } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

// Components
import SidebarList from './SidebarList';
import ContentList from './ContentList';
import NavbarOverlay from './NavbarOverlay';

// Live or Development
let live = false;



class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contentList: [],
			isLoading: true,
			errors: null
		}
	}

	componentDidMount() {
		let url = '';

		if (live) {
			url = 'jorgealvarado.me/data';
		} else {
			url = 'http://localhost:3000/data';
		}

		axios.get(url)
			.then(res => {
				this.setState({
					contentList: res.data,
					isLoading: false
				});
			})
			.catch(err => {
				this.setState({
					errors: err,
					isLoading: false
				});
			});
	}


	render() {
		const { contentList, errors, isLoading } = this.state;

		if (errors) return <p>{errors.message}</p>
		if (isLoading) return (
	        <ClipLoader
	          sizeUnit={"px"}
	          size={30}
	          color={'#123abc'}
	          loading={isLoading}
	        />
		);

		return (
			<div className="website-container">
				<SidebarList />
				<ContentList contentList={contentList} />
				<NavbarOverlay />
			</div>
		);
	}
}

export default Container;

