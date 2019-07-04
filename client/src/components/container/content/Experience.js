import React, { Fragment } from 'react';




const Experience = (props) => {
	const { experience } = props.contentList;


	return (

		<Fragment>

			{!experience ? (<p>Loading...</p>) : (
				<Fragment>

					<h2 className="header">{experience.title}</h2>
					<div className="experience">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="card">

									  <div className="card-header">
									  	<div className="row">
										    <span className="col experience-logo"><img src={`/images/${experience.edgtacy.imgURL}`} alt={experience.edgtacy.imgAlt} /></span>
										    <span className="col experience-name">{experience.title}</span>
										    <span className="col experience-title">{experience.edgtacy.role}</span>
									    </div>
									  </div>

									  <div className="card-body">
									  	<ul className="list-group">
									  		<li>
									  			{experience.edgtacy.bullet01}
									  		</li>
									  		<li>
									  			{experience.edgtacy.bullet02}
									  		</li>
									  		<li>
									  			{experience.edgtacy.bullet03}
									  		</li>
									  		<li>
									  			{experience.edgtacy.bullet04}
									  		</li>
									  	</ul>
									  </div>

									  <div className="card-footer">
									  	{experience.edgtacy.date}
									  </div>

									</div>
								</div>
							</div>

							<div className="row">
								<div className="col">
									<div className="card">

									  <div className="card-header">
									  	<div className="row">
										    <span className="col experience-logo"><img src={`/images/${experience.navy.imgURL}`} alt={experience.navy.imgAlt} /></span>
										    <span className="col experience-name">{experience.title}</span>
										    <span className="col experience-title">{experience.navy.role}</span>
									    </div>
									  </div>

									  <div className="card-body">
									  	<ul className="list-group">
									  		<li>
									  			{experience.navy.bullet01}
									  		</li>
									  		<li>
									  			{experience.navy.bullet02}
									  		</li>
									  		<li>
									  			{experience.navy.bullet03}
									  		</li>
									  	</ul>
									  </div>

									  <div className="card-footer">
									  	{experience.navy.date}
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


export default Experience;