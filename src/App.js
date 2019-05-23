import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import CustomizerApp from './CustomizerApp/CustomizerApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CustomizerApp features={this.props.features} />
      </div>
    );
  }
}

export default App;  
