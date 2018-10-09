/*
 *
 * Brendan Carlquist
 * Will contain script like font of a welcome banner message.
 * Because of the unique nature, will use component CSS.
 *
 */

import React from 'react';

class Banner extends React.Component {
  render() {
    return(
      <div className= {this.props.className}>
        <span className="girl">Christi &</span>
        <span className="guy"> JUSTIN</span>
        <br />
        <span className="subtext">October 20th, 2018</span>
      </div>
    );
  }
}


export default Banner;
