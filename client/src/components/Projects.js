import React, { Fragment } from 'react';




const Projects = (props) => {
	const { projects } = props.contentList;


	return (

		<Fragment>

			{!projects ? (<p>Loading...</p>) : (
				<Fragment>

					<h2 className="header" id="list-item-3">{projects.title}</h2>
					<div className="projects">
						<div className="container">
							<div className="row">
								<div className="card-group">


									<div className="col-lg-4 mb-4">
									  <div className="card project-card">
									    <img className="card-img-top" src={`/images/${projects.booktracking.imgURL}`} alt={projects.booktracking.imgAlt} />
									    <div className="card-body">
									      <h5 className="card-title">{projects.booktracking.title}</h5>
									      <p className="card-text">{projects.booktracking.desc}</p>
									    </div>
									    <div className="card-footer">
									      <small className="text-muted">
									      	<ul className="technologies-used">
									      		<li><a href={projects.booktracking.projectURL} target="_blank" rel='noopener noreferrer'>View Online</a></li>
									      		<li><a href={projects.booktracking.codeURL} target="_blank" rel='noopener noreferrer'>View Source</a></li>
									      	</ul>
									      </small>
									    </div>
									  </div>
									</div>

									<div className="col-lg-4 mb-4">
									  <div className="card project-card">
									    <img className="card-img-top" src={`/images/${projects.edgtacy.imgURL}`} alt={projects.edgtacy.imgAlt} />
									    <div className="card-body">
									      <h5 className="card-title">{projects.edgtacy.title}</h5>
									      <p className="card-text">{projects.edgtacy.desc}</p>
									    </div>
									    <div className="card-footer">
									      <small className="text-muted">
									      	<ul className="technologies-used">
									      		<li><a href={projects.edgtacy.projectURL} target="_blank" rel='noopener noreferrer'>View Online</a></li>
									      		<li><a href={projects.edgtacy.codeURL} target="_blank" rel='noopener noreferrer'>View Source</a></li>
									      	</ul>
									      </small>
									    </div>
									  </div>
									</div>

									<div className="col-lg-4 mb-4">
									  <div className="card project-card">
									    <img className="card-img-top" src={`/images/${projects.restaurantreview.imgURL}`} alt={projects.restaurantreview.imgAlt} />
									    <div className="card-body">
									      <h5 className="card-title">{projects.restaurantreview.title}</h5>
									      <p className="card-text">{projects.restaurantreview.desc}</p>
									    </div>
									    <div className="card-footer">
									      <small className="text-muted">
									      	<ul className="technologies-used">
									      		<li><a href={projects.restaurantreview.projectURL} target="_blank" rel='noopener noreferrer'>View Online</a></li>
									      		<li><a href={projects.restaurantreview.codeURL} target="_blank" rel='noopener noreferrer'>View Source</a></li>
									      	</ul>
									      </small>
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


export default Projects;