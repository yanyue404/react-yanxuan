import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './reducers';
import Main from './containers/Main/Main';

export default class extends Component {
  render() {
    return (
        <Provider store= {store}>
           <HashRouter>
                    <React.Fragment>
                    <Route exact path="/" component={Main}/>
                    </React.Fragment>
                </HashRouter>
        </Provider>
    );
  }
}
