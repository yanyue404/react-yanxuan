import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import './style.scss';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    const { list } = this.props;

    const swipeOpt = {
      callback: (index) => {
        this.setState({
          index,
        });
      },
      continues: false,
      auto: 2000,
    };

    return (
      <div className="swipper-wrapper">
      <ReactSwipe className="carousel" swipeOptions={swipeOpt}>
        {list.map((image, index) => (
            <div key={index} className="swipper-item">
              <img className="swipper-image" src={image} />
            </div>
          ))}
      </ReactSwipe>
      <div className="swiper-dots">
          {list.map((val, index) => {
            <span key = {index} className={dotClass(index)}></span>;
          })}
      </div>
      </div>
    );
  }
}
