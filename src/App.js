import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Radio, Input } from 'antd';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

class App extends Component {
  state = {
    selectedOption: 'option1',
    pageToRender: 'option1',
    value: 1,
  };

  handleChange = (option) => {
    this.setState({
      selectedOption: option,
      pageToRender: option,
    });
  };

  renderContentDetails = () => {
    const { pageToRender } = this.state;

    switch(pageToRender) {
      case 'option2':
        return (
          <div>
            <p>Blah.. .. . ..</p>
            <p>danskljdnas  adsaa</p>
            <p>asdsadass</p>
          </div>
        );
      case 'option3':
        return (
          <div>Hello there 3</div>
        );;
      case 'option4':
          return (
          <div>Hello there 4</div>
        );;
      default:
        return (
          <div>Hello there</div>
        );;
    }
  }

  render() {
    return (
      <div className="App">
        <form>
        <h4>Please describe the issue you wish to report</h4>
          <input
            name="input"
            type="radio"
            onChange={() => this.handleChange('option1')}
            checked={this.state.selectedOption === 'option1'}
          />
          I am experiencing a privacy issue with my account<br />
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
        </form>
        {this.renderContentDetails()}
        <div>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio style={radioStyle} value={1}>
              Option A
            </Radio>
            <Radio style={radioStyle} value={2}>
              Option B
            </Radio>
            <Radio style={radioStyle} value={3}>
              Option C
            </Radio>
            <Radio style={radioStyle} value={4}>
              More...
              {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
            </Radio>
          </Radio.Group>
        </div>
      </div>
    );
  }
};

export default App;
