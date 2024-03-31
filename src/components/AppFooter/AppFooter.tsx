import { Link, NavLink, useMatch } from "react-router-dom";
import heartIcon from "images/heart.svg";
import cartIcon from "images/cart.svg";
import circleIcon from "images/circle.svg";
import styles from "./AppFooter.module.css";
import AppLogo from "components/AppLogo/AppLogo";
import localizationIcon from "images/RU.svg";
import vkIcon from "images/VK.svg";
import telegramIcon from "images/Telegram.svg";
import whatsappIcon from "images/Whatsapp.svg";

const AppFooter = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <AppLogo />
          <div className={styles.content__middle}>
            <div className={styles.middle__col}>
              <NavLink to="/" className={styles.nav__link}>
                Избранное
              </NavLink>
              <NavLink to="/cart" className={styles.nav__link}>
                Корзина
              </NavLink>
              <NavLink to="/" className={styles.nav__link}>
                Контакты
              </NavLink>
            </div>
            <div className={styles.middle__col}>
              <NavLink to="/" className={styles.nav__link}>
                Условия сервиса
              </NavLink>
              <div className={styles.middle__localization}>
                <img src={localizationIcon} />
                <div
                  className={`${styles.localization__text} ${styles.localization__text_active}`}
                >
                  Рус
                </div>
                <div className={styles.localization__text}>Eng</div>
              </div>
            </div>
          </div>
          <div className={styles.social}>
            <Link to={"https://vk.com/antonsushilov"} target="_blank">
              <img src={vkIcon} alt="VK" title="https://vk.com/antonsushilov" />
            </Link>
            <Link to={"https://t.me/antonsushilov"} target="_blank">
              <img
                src={telegramIcon}
                alt="Telegram"
                title="https://t.me/antonsushilov"
              />
            </Link>
            <Link to={"tel:+79107441833"} target="_blank">
              <img src={whatsappIcon} alt="Whatsapp" title="+79107441833" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
