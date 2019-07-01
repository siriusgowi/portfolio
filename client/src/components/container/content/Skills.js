import React, { Fragment } from 'react';
// Images
import htmlImg from '../../../images/html.png';
import cssImg from '../../../images/css.png';
import javascriptImg from '../../../images/javascript.png';
import phpImg from '../../../images/php.png';
import nodejsImg from '../../../images/nodejs.png';
import mysqlImg from '../../../images/mysql.png';
import mongodbImg from '../../../images/mongodb.png';
import reactImg from '../../../images/react.png';
import threejsImg from '../../../images/threejs.png';
import bootstrapImg from '../../../images/bootstrap.png';
import jqueryImg from '../../../images/jquery.png';


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
		  								<img src={htmlImg} className="language-logo" alt={html.imgAlt} />
		  								<p>{html.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={cssImg} className="language-logo" alt={css.imgAlt} />
		  								<p>{css.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={javascriptImg} className="language-logo" alt={javascript.imgAlt} />
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
		  								<img src={phpImg} className="language-logo" alt={php.imgAlt} />
		  								<p>{php.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={nodejsImg} className="language-logo" alt={nodejs.imgAlt} />
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
		  								<img src={mysqlImg} className="language-logo" alt={mysql.imgAlt} />
		  								<p>{mysql.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={mongodbImg} className="language-logo" alt={mongoDB.imgAlt} />
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
		  								<img src={reactImg} className="language-logo" alt={react.imgAlt} />
		  								<p>{react.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={threejsImg} className="language-logo" alt={threejs.imgAlt} />
		  								<p>{threejs.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={bootstrapImg} className="language-logo" alt={bootstrap.imgAlt} />
		  								<p>{bootstrap.desc}</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={jqueryImg} className="language-logo" alt={jquery.imgAlt} />
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