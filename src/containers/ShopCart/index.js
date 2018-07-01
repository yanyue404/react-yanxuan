import React, { Component } from 'react';
import { PolicyList } from '../../components/PolicyList';
import './style.scss';

export default class extends Component {
  render() {
    return (
      <div className="shop-cart">
                <header className="shop-cart-header">
                    购物车
                </header>
                <section className="policys-wrapper">
                    <Policys policys={['30天无忧退货', '48小时快速退款', `满${discountPrice}元免邮费`]}/>
                </section>
                <section className="discount">
                    <Badge text='全场加价购' color='#f48f18'/>
                    {
                        discountDiff > 0 ?
                            (<span> 再购<span className="diff">{discountDiff}</span>元立享满包邮</span>) :
                            '已满足包邮条件'
                    }
                </section>
                
                        <section className="no-goods">
                            <img
                                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"/>
                            <p className="text">
                                去添加点什么吧
                            </p>
                        </section>

                }

            </div>
    );
  }
}
