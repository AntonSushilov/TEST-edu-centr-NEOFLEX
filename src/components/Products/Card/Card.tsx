import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { TProductInfo } from "utils/types";
import rateIcon from "images/star_rate.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addProductInCart } from "services/Cart/action";
import { useAppSelector } from "hooks/UseAppSelector";
import { useAppDispatch } from "hooks/UseAppDispatch";

type TCardProductInfoProps = {
  data: TProductInfo;
};

export const Card = ({ data }: TCardProductInfoProps): JSX.Element => {
  const [discountPrice, setDiscountPrice] = useState<number | null>(null);
  const [inCart, setInCart] = useState<boolean>(false);
  const { productInCartList } = useAppSelector((store) => ({
    productInCartList: store.productInCartReducer.productInCartList,
  }));

  useEffect(() => {
    setInCart(productInCartList.some((el) => el.id === data.id));
  }, [productInCartList]);

  useEffect(() => {
    if (data.price && data.discount) {
      setDiscountPrice(data.price - (data.price * data.discount) / 100);
    }
  }, [data]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleAdddToCart = (event: any) => {
    const typeEvent = event.target.dataset.type
    if (typeEvent === 'buy') {
      dispatch(
        addProductInCart({
          id: data.id,
          img: data.img,
          title: data.title,
          price: data.price,
          discount: data.discount,
          count: 1,
        })
      );
    } else if(typeEvent === 'inCart'){
      navigate('/cart');
    }else {
      navigate(`/products/${data.id}`, { state: { background: location } });
    }
  };

  return (
    // <Link
    //   to={`/products/${data.id}`}
    //   state={{ background: location }}
    //   className={styles.link}
    // >
    <div className={styles.card} onClick={(ev) => handleAdddToCart(ev)}>
      <div className={styles.card__image}>
        <img src={data.img} alt={data.title} />
      </div>
      <div className={styles.card__content}>
        <div className={styles.content__row}>
          <div className={styles.card__content__title}>{data.title}</div>
          <div className={styles.card__content__price}>
            {discountPrice ? (
              <>
                <div>{discountPrice}</div>
                <div className={styles.card__content__price_discount}>
                  {data.price}
                </div>
              </>
            ) : (
              data.price
            )}
          </div>
        </div>
        <div className={styles.content__row}>
          <div className={styles.card__content__rate}>
            <img src={rateIcon} alt="" />
            {data.rate}
          </div>
          {inCart ? (
            <div className={styles.card__content__button} data-type="inCart">
              В корзине
            </div>
          ) : (
            <div className={styles.card__content__button} data-type="buy">
              Купить
            </div>
          )}
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
