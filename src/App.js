import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // state = {

  // };

  render() {
    return (
      <div className="App">
        <form>
          <input name="input1" type="text" placeholder="input"/><br />
          <input name="input2" type="text" placeholder="input"/><br />
          <button placeholder="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
