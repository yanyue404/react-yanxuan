import React from 'react';
import { render } from 'react-dom';
import './static/css/normalize.css';
import './static/css/app.css';
import 'antd/dist/antd.css';

console.log(1)
class App extends React.Component {
  render() {
    return (
      <div>
        hello,world!
        <p>文本内容</p>
        
      </div>
    );
  }
};

render(<App />, document.getElementById('app'));
