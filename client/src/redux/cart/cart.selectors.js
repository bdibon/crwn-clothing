import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((total, curr) => (total += curr.quantity), 0)
);

export const selectCartHidden = createSelector(selectCart, cart => cart.hidden);

export const selectCartTotal = createSelector(selectCartItems, items =>
  items.reduce(
    (cartTotal, item) => (cartTotal += item.price * item.quantity),
    0
  )
);
