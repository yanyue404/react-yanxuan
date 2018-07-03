import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer, defaultState } from './reducers';
import Main from './containers/Main';
import ShopCart from './containers/ShopCart';
import GoodDetail from './containers/GoodDetail';

export default class extends Component {
  render() {
    const store = createStore(
      rootReducer,
      defaultState,
      devToolsEnhancer(),
    );
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route exact path="/" render={() => (<Redirect to="/main/home"/>)}/>
            <Route path='/main' component={Main}></Route>
            <Route path='/detail' component={GoodDetail}></Route>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}
