import { createStore, combineReducers } from 'redux';

const defaultState = {
  currentGood: {},
  shopCartGoods: [],
};

const cartReducer = (shopCartGoods, action) => {
  const copyGoods = shopCartGoods.slice();
  const actionGood = action.good;
  const exsitGood = copyGoods.find(good => good.name === actionGood.name);
  switch (action.type) {
    case 'ADD_TO_CART':
      if (exsitGood) {
        exsitGood.number += 1;
      } else {
        actionGood.number = 1;
        copyGoods.push(actionGood);
      }
      return copyGoods;
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
      console.log(good);
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

