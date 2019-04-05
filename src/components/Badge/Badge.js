import React, { Component } from 'react';
import './style.scss';

export default class extends Component {
  render() {
    const { text, color } = this.props;
    return (
      <span className="yx-badge" style={{ color, border: `1px solid ${color}` }}>
        {text}
      </span>
    );
  }
}
