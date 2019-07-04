import React, { Fragment } from 'react';

/* REACT ICONS */
import { IoIosMail } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io';



const Contact = (props) => {
	const { contact } = props.contentList;


	return (

		<Fragment>

			{!contact ? (<p>Loading...</p>) : (
				<Fragment>

					<h2 className="header">{contact.title}</h2>
					<div className="contact">
						<div className="container">
							<div className="row">
								<div className="col">
									
									<div className="card">
										<div className="card-header">
											<div className="row">
												<p>
													<a href={`mailto:${contact.email}`}>
														<IoIosMail />
														<span>{contact.email}</span>
													</a>
												</p>									
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header">
											<div className="row">
												<p>
													<a href={contact.social.linkedinURL} target="_blank" rel='noopener noreferrer'>
														<IoLogoLinkedin />
														<span>{contact.social.linkedinURL}</span>
													</a>
												</p>								
											</div>
										</div>
									</div>								
									<div className="card">
										<div className="card-header">
											<div className="row">
												<p>
													<a href={contact.social.githubURL} target="_blank" rel='noopener noreferrer'>
														<IoLogoGithub />
														<span>{contact.social.githubURL}</span>
													</a>
												</p>									
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>

				</Fragment>
			)}

		</Fragment>

	);
};


export default Contact;