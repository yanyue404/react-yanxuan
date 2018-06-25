import React, { Component } from 'react';
import './style.scss';
import { XScroll, TypeList } from '../../components';

const newGoods = [
  {
    img: 'https://yanxuan.nosdn.127.net/1492eee4a32cac60ef6ef53cdf1855bc.png?imageView&quality=65&thumbnail=330x330',
    name: '轻灵碳素羽毛球拍',
    price: 159,
    describe: '超轻球拍，运动随心',
  },
  {
    img: 'https://yanxuan.nosdn.127.net/6522dceb8f194637a812862a58cf3935.png?imageView&quality=65&thumbnail=330x330',
    name: '网易智造超静音变频直流风扇',
    price: 399,
    describe: '1个月低至1度电，像自然风一样舒服',
  },
  {
    img: 'https://yanxuan.nosdn.127.net/264bfe8941630322e2bdc3f0ccc0e244.png?imageView&quality=65&thumbnail=330x330',
    name: '雨前西湖龙井（老茶树） 100克',
    price: 148,
    describe: '2018新茶，高山老茶树茶，香醇味浓',
  },
  {
    img: 'https://yanxuan.nosdn.127.net/7111fbb51c52d061fd201b49d8228b86.png?imageView&quality=65&thumbnail=330x330',
    name: '菱形拼接束口双肩包',
    price: 168,
    describe: '大容量设计，轻盈储物',
  },
  {
    img: 'https://yanxuan.nosdn.127.net/f0de587302230a65d6ada5626411c15b.jpg?imageView&quality=65&thumbnail=330x330',
    name: 'Paisley欧式天丝四件套',
    price: 599,
    describe: '柔滑兰精天丝，清凉亲肤保湿',
  },
  {
    img: 'https://yanxuan.nosdn.127.net/d64c48b8ea7f3106d6c71389fdab4ba9.png?imageView&quality=65&thumbnail=330x330',
    name: '健康饮水 宠物自动循环活氧饮水器',
    price: 239,
    describe: '活氧体验，让萌宠爱上喝水，呵护爱宠健康',
  },
];

const recommendGoods = [
  {
    img: 'http://yanxuan.nosdn.127.net/2b53cb18ae4773aaec4466d46746971f.png?imageView&quality=65&thumbnail=330x330',
    name: '黑凤梨 20寸全铝镁合金登机箱',
    price: 699,
    describe: '41升超薄坚固，100%铝镁合金',
  },
  {
    img: 'http://yanxuan.nosdn.127.net/5fe3aecd1557871bf86f5fff9a94eb5b.png?imageView&quality=65&thumbnail=330x330',
    name: '新西兰制造 麦卢卡蜂蜜MGO250+',
    price: 199,
    describe: '新西兰国宝 麦卢卡养胃蜂蜜',
  },
  {
    img: 'http://yanxuan.nosdn.127.net/71ba49bb2d5d1cde1499cad0e18f0ac2.png?imageView&quality=65&thumbnail=330x330',
    name: '防蓝光电脑护目镜',
    price: 129,
    describe: '两款选择，护眼防蓝光',
  },
  {
    img: 'http://yanxuan.nosdn.127.net/f8ad3c11137861430f52d124ffcd9a28.png?imageView&quality=65&thumbnail=330x330',
    name: '有机皇菊 0.6克*20朵',
    price: 78,
    describe: '一级上品，严选有机',
  },
  {
    img: 'http://yanxuan.nosdn.127.net/73a065d6fc8c32197b54421808c54788.png?imageView&quality=65&thumbnail=330x330',
    name: '智能马桶盖',
    price: 1599,
    describe: '免费安装，即热恒温、暖风烘干、自动除臭',
  },
  {
    img: 'http://yanxuan.nosdn.127.net/ee60377a8d743036f82ae0de1c42cab0.png?imageView&quality=65&thumbnail=330x330',
    name: '100年传世珐琅锅',
    price: 268,
    describe: '仅售供应商建议价的1/10',
  },
];

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
                                <input placeholder="搜索商品"/>
                            </div>
                        </div>
                        <div className="types-scroll-wrapper">
                            <XScroll className="types-wrapper">
                                <TypeList />
                            </XScroll>
                        </div>
                    </div>
                </header>

            </div>
    );
  }
}
