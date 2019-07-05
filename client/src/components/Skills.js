import React, { Fragment } from 'react';



const Skills = (props) => {
	const { skills } = props.contentList;


	return (

		<Fragment>

			{!skills ? (<p>Loading...</p>) : (

			<Fragment>
				<h2 className="header" id="list-item-2">{skills.title}</h2>
				<div className="skills">
					<div className="container">

			  				<div className="card">
			  					<div className="card-content">
			  						<h4>{skills.frontend.title}</h4>
			  						<div className="row">
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.frontend.html.imgURL}`} className="language-logo" alt={skills.frontend.html.imgAlt} />
			  								<p>{skills.frontend.html.desc}</p>
			  							</div>
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.frontend.css.imgURL}`} className="language-logo" alt={skills.frontend.css.imgAlt} />
			  								<p>{skills.frontend.css.desc}</p>
			  							</div>
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.frontend.js.imgURL}`} className="language-logo" alt={skills.frontend.js.imgAlt} />
			  								<p>{skills.frontend.js.desc}</p>
			  							</div>
			  						</div>
			  					</div>
			  				</div>

			  				<div className="card">
			  					<div className="card-content">
			  						<h4 className="mt-4">{skills.backend.title}</h4>
			  						<div className="row">
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.backend.php.imgURL}`} className="language-logo" alt={skills.backend.php.imgAlt} />
			  								<p>{skills.backend.php.desc}</p>
			  							</div>
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.backend.nodejs.imgURL}`} className="language-logo" alt={skills.backend.nodejs.imgAlt} />
			  								<p>{skills.backend.nodejs.desc}</p>
			  							</div>
			  						</div>
			  					</div>
			  				</div>

			  				<div className="card">
			  					<div className="card-content">
			  						<h4 className="mt-4">{skills.databases.title}</h4>
			  						<div className="row">
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.databases.mysql.imgURL}`} className="language-logo" alt={skills.databases.mysql.imgAlt} />
			  								<p>{skills.databases.mysql.desc}</p>
			  							</div>
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.databases.mongoDB.imgURL}`} className="language-logo" alt={skills.databases.mongoDB.imgAlt} />
			  								<p>{skills.databases.mongoDB.desc}</p>
			  							</div>
			  						</div>
			  					</div>
			  				</div>

			  				<div className="card">
			  					<div className="card-content">
			  						<h4 className="mt-4">{skills.frameworks.title}</h4>
			  						<div className="row">
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.frameworks.react.imgURL}`} className="language-logo" alt={skills.frameworks.react.imgAlt} />
			  								<p>{skills.frameworks.react.desc}</p>
			  							</div>
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.frameworks.threejs.imgURL}`} className="language-logo" alt={skills.frameworks.threejs.imgAlt} />
			  								<p>{skills.frameworks.threejs.desc}</p>
			  							</div>
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.frameworks.bootstrap.imgURL}`} className="language-logo" alt={skills.frameworks.bootstrap.imgAlt} />
			  								<p>{skills.frameworks.bootstrap.desc}</p>
			  							</div>
			  							<div className="col-lg-2 lang">
			  								<img src={`/images/${skills.frameworks.jquery.imgURL}`} className="language-logo" alt={skills.frameworks.jquery.imgAlt} />
			  								<p>{skills.frameworks.jquery.desc}</p>
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


export default Skills;