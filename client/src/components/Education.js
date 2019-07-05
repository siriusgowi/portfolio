import React, { Fragment } from 'react';




const Education = (props) => {
	const { education } = props.contentList;


	return (

		<Fragment>

			{!education ? (<p>Loading...</p>) : (
				<Fragment>

					<h2 className="header" id="list-item-5">{education.title}</h2>
					<div className="education">
						<div className="container">

							<div className="row">
								<div className="col">
									<div className="card">

									  <div className="card-header">
									  	<div className="row">
										    <span className="col mr-5 education-logo"><img src={`/images/${education.udacity.imgURL}`} alt={education.udacity.imgAlt} /></span>
										    <span className="col education-name">{education.udacity.school}</span>
										    <span className="col education-title">{education.udacity.degree}</span>
									    </div>
									  </div>

									  <div className="card-footer">
									  	{education.udacity.date}
									  </div>

									</div>
								</div>
							</div>

							<div className="row">
								<div className="col">
									<div className="card">

									  <div className="card-header">
									  	<div className="row">
										    <span className="col education-logo"><img src={`/images/${education.fiu.imgURL}`} alt={education.fiu.imgAlt} /></span>
										    <span className="col education-name">{education.fiu.school}</span>
										    <span className="col education-title">{education.fiu.degree}</span>
									    </div>
									  </div>

									  <div className="card-footer">
									  	{education.fiu.date}
									  </div>

									</div>
								</div>
							</div>

							<div className="row">
								<div className="col">
									<div className="card">

									  <div className="card-header">
									  	<div className="row">
										    <span className="col education-logo"><img src={`/images/${education.mdc.imgURL}`} alt={education.mdc.imgAlt} /></span>
										    <span className="col education-name">{education.mdc.school}</span>
										    <span className="col education-title">{education.mdc.degree}</span>
									    </div>
									  </div>

									  <div className="card-footer">
									  	{education.mdc.date}
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


export default Education;