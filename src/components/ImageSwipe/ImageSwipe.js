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

  handleClickDot(index) {
    this.swipe.swipe.slide(index);
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

    const dotClass = (index) => {
      const str = this.state.index === index ? 'dot active' : 'dot';
      return str;
    };

    return (
      <div className="swipper-wrapper">
        <ReactSwipe className="carousel" ref={ref => this.swipe = ref} swipeOptions={swipeOpt}>
          {list.map((image, index) => (
            <div key={index} className="swipper-item">
              <img className="swipper-image" src={image} />
            </div>
          ))}
        </ReactSwipe>
        <div className="swiper-dots">
          {list.map((val, index) => (
            <span onClick={() => this.handleClickDot(index)} key={index} className={dotClass(index)} />
          ))}
        </div>
      </div>
    );
  }
}
