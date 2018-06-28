import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PolicyList } from '../../components';
import { store } from '../../reducers';
import './style.scss';

class GoodDetail extends Component {
  componentWillMount() {
    const currentGood = store.getState().currentGood;
    this.currentGood = currentGood;
    console.log(this.currentGood);
  }

  toHome = () => {
    this.props.history.push('/main/home');
  }

  handleCartClick = () => {
    this.props.history.push('/main/shopcart');
  }

handleBackClick = () => {
  this.props.history.goBack();
}

render() {
  const {
    img, name, price, describe,
  } = this.currentGood;

  return (
      <div className="good-detail">
      <div className="good-header-wrapper">
          <header className="good-detail-header">
              <i className="iconfont icon-shouye home" onClick={this.toHome}/>
              <p className="title">
                  网易严选
              </p>
          </header>
      </div>
      <div className="detail-content">
          <div className="img-wrapper">
              <img src={img} />
          </div>
          <div className="good-info">
              <div className="info-left">
                  <p className="name">{name}</p>
                  <p className="describe">{describe}</p>
                  <p className="price">￥{price}</p>
              </div>
          <div className="info-right">
              <p className="comment-num">195</p>
              <p className="text">用户好评</p>
          </div>
          </div>
          <ul className="action-wrapper">
              <li className="action-item">
                  1个促销： <span className="ticket"></span> <span className="ticket-text">买送优惠券</span>
              </li>
              <li className="action-item">
                  积分： 购买最多得15积分
              </li>
              <li className="action-item">
                  <p className="text-left">
                      服务：
                  </p>
                  <div className="content-right">
                  <PolicyList policys={['网易自营品牌', '30天无忧退货', '48小时快速退款']} />
                 </div>
              </li>
          </ul>
      </div>
      <div className="shop-bar">
            <div className="back">
                <i className="iconfont icon-ziyuan" onClick={this.handleBackClick} />
            </div>
            <div className="item buy-now" onTouchStart={this.handleBuyNow}>立即购买</div>
            <div className="item add-cart" onTouchStart={this.handleAddCart}>加入购物车</div>
    </div>
  </div>
  );
}
}

export default withRouter(GoodDetail);
