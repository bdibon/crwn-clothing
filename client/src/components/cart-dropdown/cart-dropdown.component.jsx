import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.components";

import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropDownButton,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropDownButton onClick={handleClick}>
        GO TO CHECKOUT
      </CartDropDownButton>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
