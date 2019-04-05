import React, { Component } from 'react';
import './style.scss';

export default class extends Component {
  render() {
    const { policys } = this.props;
    return (
      <ul className="policy-list">
        {policys.map((value, index) => (
          <li key={index} className="item">
            <i className="icon-right"></i>
            <span className="text">{value}</span>
          </li>
        ))}
      </ul>
    );
  }
}
