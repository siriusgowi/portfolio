import React, { Component, Fragment } from 'react';
import axios from 'axios';

// Components
import SidebarList from './SidebarList';
import ContentList from './ContentList';

// Live or Development
let live = true;



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
			url = 'jorgealvarado.me';
		} else {
			url = 'http://localhost:3000/data';
		}

		axios.get(url)
			.then(res => {
				this.setState({
					contentList: res.data,
					isLoading: false
				});
				console.log(this.state);
			})
			.catch(err => {
				this.setState({
					errors: err,
					isLoading: false
				});
			});
			console.log(this.state);
	}


	render() {
		const { contentList, errors, isLoading } = this.state;
		const { sidebar } = contentList;

		if (errors) return <p>{errors.message}</p>
		if (isLoading) return <p>Loading...</p>

		return (
			<Fragment>
				<SidebarList sidebar={sidebar} />
				<ContentList contentList={contentList} />
			</Fragment>
		);
	}
}

export default Container;

