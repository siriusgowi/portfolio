import React, { Component, Fragment } from 'react';
import axios from 'axios';


class Contact extends Component {
	state = {
		name: "",
		email: "",
		message: "",
		successMsg: ""
	}


	handleSubmit = (evt) => {
		evt.preventDefault();

		const newEmail = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message
		}


		axios.post('/', { newEmail })
			.then(res => {
				this.setState({
					...this.state,
					successMsg: 'Message was sent!'
				})
			})
			.catch(err => {
				console.log(err);
			});

		this.setState({
			name: '',
			email: '',
			message: ''
		});

	}

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}


	render() {

		const { name, email, message } = this.state;

		return (

			<Fragment>
				<h2 className="header" id="contact">Contact</h2>
				<div className="contact">

					<div className="container">
						<div className="row">
							<div className="col m-auto">


								<form className="contact-form mb-5 p-3 p-md-5" onSubmit={this.handleSubmit}>
									<div className="row p-5">
										<div className="form-group col-md-6 text-left">
											<label htmlFor="name">Name</label>
											<input 
												type="text" 
												className="form-control" 
												name="name" 
												value={name}
												onChange={this.handleChange}
												required 
											/>
										</div>

										<div className="form-group col-md-6 text-left">
											<label htmlFor="email">Email</label>
											<input 
												type="email" 
												className="form-control" 
												name="email" 
												value={email}
												onChange={this.handleChange}
												required 
											/>
										</div>

										<div className="form-group col-md-12 text-left">
											<label htmlFor="email">Message</label>
											<textarea 
												className="form-control" 
												name="message" 
												value={message}
												onChange={this.handleChange}
												rows="5" 
												required 
											></textarea>
										</div>

										<div className="form-group col-md-12">
											<button className="btn btn-primary btn-block py-2" type="submit">Submit</button>
										</div>

									</div>
								</form>
								
							</div>
						</div>
					</div>

				</div>
			</Fragment>

		);
	}

}


export default Contact;


