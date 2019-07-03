import React, { Fragment } from 'react';




const About = (props) => {
	const { about } = props.contentList;


	return (

		<Fragment>

			{!about ? (<p>Loading...</p>) : (
				<Fragment>
					<h2 className="header">{about.title}</h2>
					<div className="about">
						<div className="container">
							<div className="row">
								<div className="col">

								  <div className="blog-card alt">
								    <div className="meta">
								      <div className="photo"><img src={`/images/${about.imgURL}`} alt={about.imgAlt} /></div>
								    </div>
								    <div className="description">
								      <h3 className="quote">{about.quote} </h3>
								      <h4 className="quote-author">- {about.quoteAuthor}</h4>
								      <p>{about.bio}</p>
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


export default About;