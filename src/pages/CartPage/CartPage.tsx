import React, { useEffect, useReducer } from "react";

import styles from "./CartPage.module.css";
import { useAppSelector } from "hooks/UseAppSelector";
import CartCard from "components/CartCard/CartCard";
import { TProductInCart, TProductInCartList } from "utils/types";


const initialSummPrice = 0;
const reducerSummPrice = (
  state: number,
  products: TProductInCartList
): number => {
  let score = products.reduce(function (
    a: number,
    b: TProductInCart
  ) {
    return a + (b 
      ? b.discount 
        ? (b.price - (b.price * b.discount) / 100) * b.count
        : b.price * b.count
      : 0);
  },
  0);
  return score;
};

const CartPage = () => {
  const { productInCartList } =
  useAppSelector(
    (store) => ({
      productInCartList: store.productInCartReducer.productInCartList,
      
    })
  );

  const [summPrice, setSummPrice] = useReducer(
    reducerSummPrice,
    initialSummPrice
  );

  useEffect(() => {
    setSummPrice(productInCartList);
  }, [productInCartList])

  console.log('productInCartList', productInCartList)
  console.log('productInCartList', summPrice)
  return (
    <div className={styles.cartpage}>
      <div className={styles.container}>
        <div className={styles.title}>Корзина</div>
        <div className={styles.content}>
          <div className={styles.content__products}>
            {productInCartList &&
              productInCartList.map((product, index) => (
                <CartCard key={index} data={product} />
              ))}
          </div>
          <div className={styles.content__cart}>
            <div className={styles.content__cart__content}>
              <div className={styles.cart__content__info}>
                <div>ИТОГО</div>
                <div>₽ {summPrice.toFixed(2)}</div>
              </div>
              <div className={styles.cart__button}>Перейти к оформлению</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
