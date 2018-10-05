/*
 * Brendan Carlquist
 * 
 * Navbar component. creates a navbar populated with multiple sections for scroll targetting.
 * 
 * accepts the following props:
 * sections: [] of {href:'link',label:'textToDisplay'}
 * id (string) for ID attribute.
 * 
 */


import React from 'react';

import Scroll from 'react-scroll';

var Link = Scroll.Link;

class Navbar extends React.Component {
	render() {
		let iter = 0;
		return (
			<nav id={this.props.id}>
				<ul>
					{
						this.props.sections.map(function (element) {
							iter++;
							return(
								<li key={iter}>
									<Link 
										to={element.href} 
										spy={true}
										smooth={true} 
										duration={500} 
										style={{cursor : 'pointer'}}
									>
											{element.label}
									</Link>
								</li>
							);
								
						})
					}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
