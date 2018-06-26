import React, { Component } from 'react';
import './style.scss';

export default class extends Component {
  render() {
    const {
      title, bgImage, textColor, btnColor,
    } = this.props;
    return (
            <section className="color-panel" style={{ backgroundImage: `url(${bgImage})` }}>
                <article className="content" style={{ color: textColor }}>
                    <p className="title">{title}</p>
                    <div className="more" style={{ backgroundColor: btnColor }}>
                        查看更多
                        <i className="icon-arrow-right-copy-copy-copy iconfont" />
                    </div>
                </article>
            </section>
    );
  }
}
