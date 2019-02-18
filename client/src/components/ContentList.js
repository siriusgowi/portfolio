import React, { Component } from 'react';
import '../App.css';
import buddha from '../images/buddha.jpg';



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

			</div>
		);
	}
}

export default ContentList;