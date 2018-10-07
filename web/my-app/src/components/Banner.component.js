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
      <div className= {this.props.className}> Christi and Justin's wedding! </div>
    );
  }
}


export default Banner;
