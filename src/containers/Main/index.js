import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from '../Home';
import ShopCart from '../ShopCart';
import Author from '../Author';
import './style.scss';

export default class extends Component {
  render() {
    return (
      <div className="main">
        <div className="router-view">
          <Route exact path="/main/home" component={Home} />
          <Route exact path="/main/shopcart" component={ShopCart} />
          <Route exact path="/main/author" component={Author} />
        </div>
        <nav className="App-nav">
          <NavLink exact activeClassName="active" className="App-nav-link" to="/main/home">
            <i className="iconfont icon-shouye" />
            <span className="text">首页</span>
          </NavLink>
          <NavLink exact activeClassName="active" className="App-nav-link" to="/main/shopcart">
            <i className="iconfont icon-gouwuche cart" />
            <span className="text">购物车</span>
          </NavLink>
          <NavLink exact activeClassName="active" className="App-nav-link" to="/main/author">
            <i className="iconfont icon-gerenzhongxin" />
            <span className="text">作者</span>
          </NavLink>
        </nav>
      </div>
    );
  }
}
