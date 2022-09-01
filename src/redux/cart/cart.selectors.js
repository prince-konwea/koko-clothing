import { createSelector } from "reselect";

const SelectCart = state => state.cart;

export const SelectCartItems = createSelector(
    [SelectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [SelectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity, 0
        )
);