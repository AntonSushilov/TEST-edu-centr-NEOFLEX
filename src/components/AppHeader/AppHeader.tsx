import { NavLink, useMatch } from "react-router-dom";
import { ReactComponent as CartIcon } from "images/cart.svg";
import { ReactComponent as HeartIcon } from "images/heart.svg";
import styles from "./AppHeader.module.css";
import AppLogo from "components/AppLogo/AppLogo";
import { useAppSelector } from "hooks/UseAppSelector";
import { useMemo } from "react";

const AppHeader = (): JSX.Element => {
  const { productInCartList } = useAppSelector(
    (store) => ({
      productInCartList: store.productInCartReducer.productInCartList,
    })
    // shallowEqual
  );

  const countInCart = useMemo(() => {
    return productInCartList.reduce((acc, cur) => acc + cur.count, 0);
  }, [productInCartList]);
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <NavLink to="/" className={styles.nav__link}>
          <AppLogo />
        </NavLink>
        <div className={styles.cart}>
          <NavLink to="/wish-list" className={styles.nav__link}>
            <div className={styles.cart__box}>
              <HeartIcon className={styles.cart__icon} />
              <div className={styles.cart__box__count}>
                <span className={styles.cart__box__count__text}>2</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/cart" className={styles.nav__link}>
            <div className={styles.cart__box}>
              <CartIcon className={styles.cart__icon} />
              {countInCart > 0 && (
                <div className={styles.cart__box__count}>
                  <span className={styles.cart__box__count__text}>
                    {countInCart}
                  </span>
                </div>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
