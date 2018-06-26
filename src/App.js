import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducers';
import Main from './containers/Main';
import ShopCart from './containers/ShopCart';

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route exact path="/" render={() => (<Redirect to="/main/home"/>)}/>
            <Route path='/main' component={Main}></Route>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}
