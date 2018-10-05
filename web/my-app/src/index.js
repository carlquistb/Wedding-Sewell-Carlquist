/*
 *
 *Brendan Carlquist
 *contains most of the static website content. Imports react components.
 *
*/

//remote imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sticky from 'react-stickynode';


//local imports
import Navbar from './components/Navbar.component'



const Wedding = (
<div>
	<h1>wedding!</h1>

	<Sticky enabled={true}>
	<Navbar 
		id="navbar" 
		sections={[
			{label: 'SECTION 1',href: 'section1'},
			{label: 'SECTION 2',href: 'section2'},
			{label: 'SECTION 3',href: 'section3'}]}>
	</Navbar>
	</Sticky>

	<div style={{height: '200px'}}> </div>
	<div id='section1' style={{height: '200px'}}></div>
	<div id='section2' style={{height: '200px'}}></div>
	<div id='section3' style={{height: '200px'}}></div>
</div>
);

ReactDOM.render(
	Wedding,
	document.getElementById('root')
);
