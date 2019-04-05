import React, { Component } from 'react';
import { XScroll, TypeList, ImageSwipper, PolicyList, BrandCard, ColorPanel, GoodsSwiper } from '../../components';
import Mock from "../../mock";
import './style.scss';


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <div className="fixed-header">
            <div className="search-bar">
              <div className="logo">
                <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" />
              </div>
              <div className="search">
                <i className="iconfont icon-sousuo" />
                <input placeholder="搜索商品" />
              </div>
            </div>
            <div className="types-scroll-wrapper">
              <XScroll className="types-wrapper">
                <TypeList />
              </XScroll>
            </div>
          </div>
        </header>
        <ImageSwipper list={Mock.swiper} />
        <section className="home-policys">
          <PolicyList policys={['网易自营品牌', '30天无忧退货', '48小时快速退款']} />
        </section>
        <section className="index-floor">
          <header className="title">
            <span className="text">
              品牌制造商直供 <i className="iconfont icon-ICONbiaozhun_fuzhi-" />
            </span>
          </header>
          <ul className="list">
            <li className="item">
              <BrandCard isNew
                brand="Nine West"
                price={199}
                img="https://yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png?imageView&thumbnail=355x0&quality=65"
                href="https://m.you.163.com/item/manufacturer?tagId=1038001&page=1&size=100"
              />
            </li>
            <li className="item">
              <BrandCard
                brand="Ralph Lauren"
                price={19}
                img="https://yanxuan.nosdn.127.net/f898f62e0a3d68faf9506792f344a503.png?imageView&thumbnail=355x0&quality=65"
                href="https://m.you.163.com/item/manufacturer?tagId=1001020&page=1&size=100"
              />
            </li>
            <li className="item">
              <BrandCard brand="爱慕"
                price={35}
                img="https://yanxuan.nosdn.127.net/eadb8d362726ccef7c40659a5f20e210.png?imageView&thumbnail=355x0&quality=65"
                href="https://m.you.163.com/item/manufacturer?tagId=1001016&page=1&size=100"
              />
            </li>
            <li className="item">
              <BrandCard
                isNew
                brand="CK"
                price={25}
                img="https://yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png?imageView&thumbnail=355x0&quality=65"
                href="https://m.you.163.com/item/manufacturer?tagId=1026000&page=1&size=100"
              />
            </li>
          </ul>
        </section>
        <section className="home-color-panel">
          <ColorPanel
            title="新品首发"
            bgImage="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png"
            textColor="#8BA0B6"
            btnColor="#d8e5f1"
          />
        </section>
        <section className="home-good-swiper">
          <GoodsSwiper goods={Mock.newGoods} />
        </section>
        <section className="home-color-panel">
          <ColorPanel
            title="人气推荐·好物精选"
            bgImage="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png"
            textColor="#B4A078"
            btnColor="#F4E9CB"
          />
        </section>
        <section className="home-good-swiper">
          <GoodsSwiper goods={Mock.recommendGoods} />
        </section>
      </div>

    );
  }
}
