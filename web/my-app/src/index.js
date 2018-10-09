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
import Banner from './components/Banner.component'



const Wedding = (
<div>
	<Banner className="Banner"> Come celebrate with us </Banner>
	{/*BREAK SPACE*/}
	<div style={{height: '200px'}}> </div>
	<div id='landing' className='topic'>
		<p>
			information on the location, arrival time, how to park, loose directions.
		</p>
	</div>
	<Sticky enabled={true}>
		<Navbar
			id="navbar" className="navbar"
			topics={[
				{label: 'LANDING',href: 'landing'},
				{label: 'SCHEDULE OF EVENTS',href: 'agenda'},
				{label: 'WEDDING WEEK',href: 'schedule'},
				{label: 'SONG REQUESTS',href: 'song'},
				{label: 'PHOTOS',href: 'photo'},
				{label: 'REGISTRIES',href: 'registry'},
				{label: 'HOTELS',href: 'hotel'},
				{label: 'COUPLE\'S HISTORY',href: 'history'}]}>
		</Navbar>
	</Sticky>
	<div id='agenda' className='topic'>
		<header> Schedule of events </header>
		<p>
			loose schedule for ceremony, party, etc. Day-of stuff.
		</p>
	</div>
	<div id='schedule' className='topic'>
		<header>Wedding Week</header>
		<p>
			The week of. What other events are going on? Directions, etc. Perhaps other Austin attractions to check out?
		</p>
	</div>
	<div id='song' className='topic'>
		<header>Song Requests</header>
		<p>
			finally, some functionality. Ability to add songs to the list for the DJ to look into. A list of the current playlist.
		</p>
		<p>
			Perhaps, you want to make a few playlists available, promting people with specific genres. Dancing, love songs, hip hop, jazz, slow step, etc.
		</p>
	</div>
	<div id='photo' className='topic'>
			<header>Photography</header>
			<p>
				for now, some info about the photographer, a link to their site. Once pictures are available, this will have a cool collage view I can put together, as well as a link to download.
			</p>
			<p>
				Depending on how many you want to make available to others, we can either make a seperate page when the time comes or make it a slideshow sort of thing on this page. Tons of options.
			</p>
	</div>
	<div id='registry' className='topic'>
			<header>Registries</header>
			<p>
				Information about each of the places where you are registered. Perhaps an aside on what is most important.
			</p>
	</div>
	<div id='hotel' className='topic'>
			<header>Hotels and Restaurants</header>
			<p>
				Information about hotels nearby and that sort of thing. Places people might like to eat while they are in town.
			</p>
	</div>
	<div id='history' className='topic'>
		{/*TODO: two columns*/}
			<div className="row">
				<div class="one-half column">
					<header>Christi</header>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et posuere quam, sed efficitur ex. Donec sodales odio eget vehicula tempor. Phasellus sed ligula vehicula, dictum arcu id, venenatis elit. Fusce non consectetur eros, eget blandit elit. Curabitur ac porta justo. Aenean ut malesuada turpis. Etiam porttitor euismod arcu, ac commodo mi ultrices vitae. Quisque consectetur egestas nibh, non iaculis eros consequat non. Nulla blandit quam est.
					</p>
				</div>
				<div class="one-half column">
					<header>Justin</header>
					<p>
						Etiam iaculis id justo a faucibus. Vestibulum hendrerit tincidunt risus eu commodo. Curabitur iaculis, massa tincidunt elementum tristique, orci justo lacinia velit, eu efficitur nisi ante quis mauris. Nulla facilisi. Fusce neque dui, consequat ut condimentum eu, maximus quis lorem. Integer eleifend libero at massa suscipit consequat. Nunc elementum, lacus eu facilisis dictum, elit diam facilisis sapien, at vulputate mauris felis eu ante. Fusce vitae pharetra mi, ac ullamcorper sapien.
					</p>
				</div>
			</div>
			<hr />
			<p>
				Build-up to the proposal, purchase house, big things youve done together.
			</p>
	</div>
</div>
);

ReactDOM.render(
	Wedding,
	document.getElementById('root')
);
