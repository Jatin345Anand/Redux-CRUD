import React, { Component } from 'react';
import  InputCrud from './components/InputCrud';
import OutPutCrud from './components/OutputCrud';
import './App.css';
class App extends Component {
  render() { 
    return (
    <div className="App">
      <h2>React Redux Example</h2>
      <InputCrud/>
      <OutPutCrud/>
     </div> 
    );
  }
}

export default App;