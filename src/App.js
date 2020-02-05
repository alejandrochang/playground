import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { selectedOption: 'option1' };

  handleChange = (option) => {
    this.setState({ selectedOption: option })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('A name was submitted: ' + this.state.selectedOption);
  }

  render() {
    return (
      <div className="App">
        <form>
        <h4>Please describe the issue you wish to report</h4>
          <input
            id="choice1"
            name="input"
            type="radio"
            onChange={() => this.handleChange('option1')}
            checked={this.state.selectedOption === 'option1'}
          />
          <label htmlFor="choice1">
            I am experiencing a privacy issue with my account
          </label><br />
          <input
            id="choice2"
            name="input"
            type="radio"
            onChange={() => this.handleChange('option2')}
            checked={this.state.selectedOption === 'option2'}
          />
          <label htmlFor="choice2">
            I want to remove content from my account
          </label><br />
          <input
            id="choice3"
            name="input"
            type="radio"
            onChange={() => this.handleChange('option3')}
            checked={this.state.selectedOption === 'option3'}
          />
          <label htmlFor="choice3">
            I found a technical security bug in the product
          </label><br />
          <input
            id="choice4"
            name="input"
            type="radio"
            onChange={() => this.handleChange('option4')}
            checked={this.state.selectedOption === 'option4'}
          />
          <label htmlFor="choice4">
            I have a suggestion to improve an existing feature
          </label><br />
          <br />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
