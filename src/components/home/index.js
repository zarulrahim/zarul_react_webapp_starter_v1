import React, { Component } from 'react';
import withLayout from './../layout';

class Home extends Component {

  componentDidUpdate() {
    //
  }

  render() {
    
    return (
      <div>
        <h1>Homepage</h1>
      </div>
    );
  }
}

export default withLayout(Home);
