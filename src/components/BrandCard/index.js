import React, { Component } from 'react'
import './style.scss'
export default class extends Component {
  render() {

    const { isNew, brand, price, img, href } = this.props;
    return (
      <a className="brand-item">
        <img src={img} />
        <div className="content" >
          <p className="text">
            {brand}制造商
                    </p>
          <p className="text">
            {price}元起
                    </p>
          {isNew ? <i className="icon-new" /> : ''}
        </div>
      </a>
    )
  }
}