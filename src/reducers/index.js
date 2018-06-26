import { createStore, combineReducers } from 'redux';


const defaultState = {
  currentGood: {},
  shopCartGoods: [],
};

// 设置展示详情的商品
export const setCurrentGoods = good => ({
  type: 'SET_CURRENT_GOOD',
  good,
});

const cartReducer = (shopCartGoods, action) => {
  const copyGoods = shopCartGoods.slice();
  switch (action.type) {
    case 'DECREASE_FROM_CART':
      return copyGoods;
    default:
      return shopCartGoods;
  }
};


const goodReducer = (currentGood, action) => {
  switch (action.type) {
    case 'SET_CURRENT_GOOD':
      const { good } = action;
      return good;
    default:
      return currentGood;
  }
};

const rootReducer = (state = {}, action) => ({
  currentGood: goodReducer(state.currentGood, action),
  shopCartGoods: cartReducer(state.shopCartGoods, action),
});

export const store = createStore(rootReducer, defaultState);

