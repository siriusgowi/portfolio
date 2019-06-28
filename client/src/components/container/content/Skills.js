import React, { Fragment } from 'react';



const Skills = (props) => {
	const { title, frontEnd, backEnd, databases, frameworks } = props.skills;

	const { frontendTitle, html, css, javascript } = frontEnd;
	const { backendTitle, nodejs, php } = backEnd;
	const { databaseTitle, mongoDB, mysql } = databases;
	const { frameworkTitle, bootstrap, jquery, react, threejs } = frameworks;


	return (
		<Fragment>
			<h2 className="header">{title}</h2>
			<div className="skills">
				<div className="container">

		  				<div className="card">
		  					<div className="card-content">
		  						<h4>{frontendTitle}</h4>
		  						<div className="row">
		  							<div className="col-lg-2 lang">
		  								<img src={html.imgURL} className="language-logo" alt={html.imgAlt} />
		  								<p>{html.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={css.imgURL} className="language-logo" alt={css.imgAlt} />
		  								<p>{css.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={javascript.imgURL} className="language-logo" alt={javascript.imgAlt} />
		  								<p>{javascript.desc}</p>
		  							</div>
		  						</div>
		  					</div>
		  				</div>

		  				<div className="card">
		  					<div className="card-content">
		  						<h4 className="mt-4">{backendTitle}</h4>
		  						<div className="row">
		  							<div className="col-lg-2 lang">
		  								<img src={php.imgURL} className="language-logo" alt={php.imgAlt} />
		  								<p>{php.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={nodejs.imgURL} className="language-logo" alt={nodejs.imgAlt} />
		  								<p>{nodejs.desc}</p>
		  							</div>
		  						</div>
		  					</div>
		  				</div>

		  				<div className="card">
		  					<div className="card-content">
		  						<h4 className="mt-4">{databaseTitle}</h4>
		  						<div className="row">
		  							<div className="col-lg-2 lang">
		  								<img src={mysql.imgURL} className="language-logo" alt={mysql.imgAlt} />
		  								<p>{mysql.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={mongoDB.imgURL} className="language-logo" alt={mongoDB.imgAlt} />
		  								<p>{mongoDB.desc}</p>
		  							</div>
		  						</div>
		  					</div>
		  				</div>

		  				<div className="card">
		  					<div className="card-content">
		  						<h4 className="mt-4">{frameworkTitle}</h4>
		  						<div className="row">
		  							<div className="col-lg-2 lang">
		  								<img src={react.imgURL} className="language-logo" alt={react.imgAlt} />
		  								<p>{react.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={threejs.imgURL} className="language-logo" alt={threejs.imgAlt} />
		  								<p>{threejs.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={bootstrap.imgURL} className="language-logo" alt={bootstrap.imgAlt} />
		  								<p>{bootstrap.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={jquery.imgURL} className="language-logo" alt={jquery.imgAlt} />
		  								<p>{jquery.desc}</p>
		  							</div>
		  						</div>
		  					</div>
		  				</div>

				</div>					
			</div>
		</Fragment>
	);
};


export default Skills;