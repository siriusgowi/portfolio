import React, { Component } from 'react';
import '../App.css';
import buddha from '../images/buddha.jpg';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import php from '../images/php.png';
import nodejs from '../images/nodejs.png';
import mysql from '../images/mysql.png';
import mongodb from '../images/mongodb.png';
import react from '../images/react.png';
import three from '../images/threejs.png';
import bootstrap from '../images/bootstrap.png';
import jquery from '../images/jquery.png';



class ContentList extends Component {
	render() {
		return (
			<div>

				{/* ABOUT */}
				<h2 className="header">About</h2>
				  <div className="blog-card alt">
				    <div className="meta">
				      <div className="photo"><img src={buddha} alt="buddha" /></div>
				    </div>

				    <div className="description">
				      <h3 className="quote">Victorious warriors win in the mind before going to battle </h3>
				      <h4 className="quote-author">- Sun Tzu</h4>
				      <p>In 2004, I joined the military. Upon completion in 2008 with honorable discharge, I re-entered the civilian world and enrolled into college as a pre-med student. Into my third year, I was enthusiastic of the direction technology was heading and wanted to play a huge part in it, so I decided to drop out of school and teach myself to program. My new journey began with learning HTML, CSS and JavaScript on the front-end then shortly afterwards extending my reach into the back-end with PHP and MySQL. Since then my toolset and programming skills has continued to grow. I thrive in challenging environments and hate to be the smartest person in a room. This is why I'm excited to make a huge impact at a high growth company.</p>
				    </div>
				  </div>


		  		{/* SKILLS */}
				<h2 className="header">Skills</h2>
		 		<div className="skills">
		  		skills
		  			<div className="container">
		  				container

		  				<div className="card">
		  					card
		  					<div className="card-content">
		  						card-content
		  						<h4>Front-End</h4>
		  						<div className="row">
		  							<div className="col-lg-2 lang">
		  								<img src={html} className="language-logo" alt="html" />
		  								<p>HTML</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={css} className="language-logo" alt="css" />
		  								<p>CSS</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={javascript} className="language-logo" alt="javascript" />
		  								<p>JavaScript</p>
		  							</div>
		  						</div>
		  					</div>
		  				</div>

		  				<div className="card">
		  					card
		  					<div className="card-content">
		  						card-content
		  						<h4>Back-End</h4>
		  						<div className="row">
		  							<div className="col-lg-2 lang">
		  								<img src={php} className="language-logo" alt="html" />
		  								<p>PHP</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={nodejs} className="language-logo" alt="css" />
		  								<p>NodeJS</p>
		  							</div>
		  						</div>
		  					</div>
		  				</div>

		  				<div className="card">
		  					card
		  					<div className="card-content">
		  						card-content
		  						<h4>Databases</h4>
		  						<div className="row">
		  							<div className="col-lg-2 lang">
		  								<img src={mysql} className="language-logo" alt="html" />
		  								<p>MySQL</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={mongodb} className="language-logo" alt="css" />
		  								<p>MongoDB</p>
		  							</div>
		  						</div>
		  					</div>
		  				</div>

		  				<div className="card">
		  					card
		  					<div className="card-content">
		  						card-content
		  						<h4>Frameworks/Libraries</h4>
		  						<div className="row">
		  							<div className="col-lg-2 lang">
		  								<img src={react} className="language-logo" alt="html" />
		  								<p>React</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={three} className="language-logo" alt="javascript" />
		  								<p>Three</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={bootstrap} className="language-logo" alt="html" />
		  								<p>Bootstrap</p>
		  							</div>
		  							<div className="col-lg-2 lang">
		  								<img src={jquery} className="language-logo" alt="css" />
		  								<p>jQuery</p>
		  							</div>
		  						</div>
		  					</div>
		  				</div>

		  			</div>
				</div>



			</div>
		);
	}
}

export default ContentList;