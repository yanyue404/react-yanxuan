import { createStore, combineReducers, compose } from 'redux';

const defaultState = {
  currentGood: {},
  shopCartGoods: []
};

const cartReducer = function(shopCartGoods, action) {
  const copyGoods = shopCartGoods.slice();
  const actionGood = action.good;
  const exsitGood = copyGoods.find(good => good.name === actionGood.name);
  switch (action.type) {
    case 'ADD_TO_CART':
      if (exsitGood) {
        exsitGood.number++;
      } else {
        actionGood.number = 1;
        copyGoods.push(actionGood);
      }
      return copyGoods;
    case 'DECREASE_FROM_CART':
      exsitGood.number--;
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
  shopCartGoods: cartReducer(state.shopCartGoods, action)
});

export const store = createStore(
  rootReducer,
  defaultState,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

// 商品数量
export const goodsNum = () =>
  store
    .getState()
    .shopCartGoods.reduce((total, good) => total + good.number, 0);
