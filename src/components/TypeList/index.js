import React, { Component } from 'react';
import './style.scss';

export default class TypeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  static defaultProps = {
    list: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '婴童', '文艺', '特色区', '火星区'],
  }

  handleItemClick(index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <ul className="yx-types">
        {this.props.list.map((value, index) => {
          const itemCls = index === this.state.activeIndex ? 'item active' : 'item';
          return <li key={index} className={itemCls} onClick={() => this.handleItemClick(index)}>{value}</li>;
        })}
      </ul>
    );
  }
}

