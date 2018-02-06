import React, { Component } from 'react';
import { Button, Input, Select  } from 'antd';
const Option = Select.Option;
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
      const selectBefore = (
        <Select defaultValue="Http://" style={{ width: 90  }}>
            <Option value="Http://">Http://</Option>
          <Option value="Https://">Https://</Option>
          </Select>
      );
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Input placeholder="Basic usage" />
      </div>
    );
  }
}

export default App;
