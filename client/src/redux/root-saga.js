import { all, call } from "@redux-saga/core/effects";
import { cartSagas } from "./cart/cart.sagas.js";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
