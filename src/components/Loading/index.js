import React, { Component } from 'react';
import './style.scss';

export default class extends Component {
  render() {
    const { loading } = this.props;
    return (
      loading ? (
                        <div className="loading-wrapper">
                            <i className="iconfont icon-loading" />
                        </div>
      ) : null
    );
  }
}
