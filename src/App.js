import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducers';
import { Main, GoodDetail } from "./containers";

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route exact path="/" render={() => (<Redirect to="/main/home" />)} />
            <Route path='/main' component={Main}></Route>
            <Route path='/detail' component={GoodDetail}></Route>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}
