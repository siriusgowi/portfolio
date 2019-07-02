import React, { Fragment } from 'react';
// Images
//import buddhaImg from '../../../images/buddha.jpg';



const About = (props) => {
	const { title, imgURL, imgAlt, quote, quoteAuthor, bio } = props.about;


	return (
		<Fragment>
			<h2 className="header">{title}</h2>
			<div className="about">
				<div className="container">
					<div className="row">
						<div className="col">

						  <div className="blog-card alt">
						    <div className="meta">
						      <div className="photo"><img src={imgURL} alt={imgAlt} /></div>
						    </div>
						    <div className="description">
						      <h3 className="quote">{quote} </h3>
						      <h4 className="quote-author">- {quoteAuthor}</h4>
						      <p>{bio}</p>
						    </div>
						  </div>

						</div>
					</div>
				</div>					
			</div>
		</Fragment>
	);
};


export default About;