import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducer';
import Home from './containers/home';

class App extends Component {
  render() {
    <Provider store={store}>
      <HashRouter>
        <React.Fragment>
        <Route exact path="/" render={() => (<Redirect to="/main/home"/>)}/>
        <Route path='/main' component={Home}></Route>
        </React.Fragment>
      </HashRouter>
    </Provider>;
  }
}

export default App;
