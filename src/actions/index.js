// 设置展示详情的商品
export const setCurrentGoods = good => ({
  type: 'SET_CURRENT_GOOD',
  good,
});

// 加入购物车
export const addToCart = good => ({
  type: 'ADD_TO_CART',
  good,
});

// 减少数量
export const decreaseFromCart = good => ({
  type: 'DECREASE_FROM_CART',
  good,
});
