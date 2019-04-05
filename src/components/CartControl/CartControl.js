import React, { Component } from 'react';
import './style.scss';

export default class extends Component {
  handleClickDecrease = (e) => {
    const { value, onDecrease } = this.props;
    onDecrease && (value > 1) && onDecrease(e);
  }

  handleClickAdd = (e) => {
    const { onAdd } = this.props;
    onAdd && onAdd(e);
  }

  render() {
    const { value } = this.props;
    const decreaseCls = value > 1 ? 'decrease' : 'decrease disabled';
    return (
      <div className="cart-control">
        <div className={decreaseCls} onTouchStart={this.handleClickDecrease}>-</div>
        <div className="input">
          {value}
        </div>
        <div className="add" onTouchStart={this.handleClickAdd}>+</div>
      </div>
    );
  }
}
