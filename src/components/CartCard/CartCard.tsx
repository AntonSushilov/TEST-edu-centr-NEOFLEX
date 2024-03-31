import React, { useEffect, useMemo, useState } from "react";
import { TProductInCart } from "utils/types";
import bunIcon from "images/bun.svg";
import incrementIcon from "images/increment.svg";
import decrementIcon from "images/decrement.svg";
import styles from "./CartCard.module.css";
import {
  decrementProductInCart,
  deleteProductInCart,
  incrementProductInCart,
} from "services/Cart/action";
import { useAppDispatch } from "hooks/UseAppDispatch";
type TCardProductInCartProps = {
  data: TProductInCart;
};

const CartCard = ({ data }: TCardProductInCartProps): JSX.Element => {
  const [discountPrice, setDiscountPrice] = useState<number | null>(null);
  useEffect(() => {
    if (data.discount) {
      setDiscountPrice(data.price - (data.price * data.discount) / 100);
    }
  }, [data]);
  const sum = useMemo(() => (data.count * (discountPrice ? discountPrice : data.price)).toFixed(2), [data.count, data.price, discountPrice]);
  const dispatch = useAppDispatch();
  const deleteProduct = () => {
    dispatch(deleteProductInCart(data.id));
  };

  const incrementProduct = () => {
    dispatch(incrementProductInCart(data.id));
  };
  const decrementProduct = () => {
    if (data.count - 1 > 0) {
      dispatch(decrementProductInCart(data.id));
    } else {
      dispatch(deleteProductInCart(data.id));
    }
  };
  return (
    <div className={styles.cartcard}>
      <div className={styles.cartcard__content}>
        <div className={styles.cartcard__header}>
          <img src={bunIcon} alt="Удалить из корзины" title="Удалить из корзины" onClick={deleteProduct}/>
        </div>
        <div className={styles.cartcard__description}>
          <img src={data.img} alt={data.title} title={data.title} />
          <div className={styles.cartcard__info}>
            <div className={styles.cartcard__title}>{data.title}</div>
            <div className={styles.cartcard__price}>{data.price} ₽</div>
          </div>
        </div>
        <div className={styles.cartcard__footer}>
          <div className={styles.cartcard__count}>
            <img src={decrementIcon} alt="Уменьшить количество" onClick={decrementProduct} title="Уменьшить количество"  />
            <div className={styles.cartcard__count__text}>{data.count}</div>
            <img src={incrementIcon} alt="Увеличить количество" onClick={incrementProduct} title="Увеличить количество"/>
          </div>
          <div className={styles.cartcard__sum}>{sum} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
