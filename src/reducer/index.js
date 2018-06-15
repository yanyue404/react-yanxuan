import { createStore, combineReducers } from 'redux';






export const store = createStore(rootReducer, defaultState);

// 商品数量
export const goodsNum = () => store.getState().shopCartGoods.reduce((total, good) => total + good.number, 0);
