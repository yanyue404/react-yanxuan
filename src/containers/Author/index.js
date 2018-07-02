import React, { Component } from 'react';
import { Loading } from '../../components';
import authorImg from '../../static/images/xiaoyueyue.jpg';
import './style.scss';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgLoading: true,
    };
  }

  imgLoad = (e) => {
    this.setState({
      imgLoading: false,
    });
  }

  render() {
    const { imgLoading } = this.state;
    return (
          <React.Fragment>
              <div className="author-wrapper">
                  <Loading loading={imgLoading} />
                  <img src={authorImg} onLoad={this.imgLoad}/>
                  <h1 className="name">xiaoyueyue</h1>
              </div>
              <div className="desc">
                  <h1 className="title">技术栈</h1>
                  <p>
                      React、React-Router、Redux、Better-Scroll
                  </p>
              </div>
              <div className="desc">
                  <h1 className="title">源码地址</h1>
                  <p>
                      <a className="link" href="https://github.com/xiaoyueyue165/react-yanxuan">
                      https://github.com/xiaoyueyue165/react-yanxuan
                      </a>
                  </p>
              </div>
          </React.Fragment>
    );
  }
}
