import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import TwilioSite from './containers/twilioSite';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <TwilioSite />
        </Layout>
      </div>
    );
  }
}

export default App;
