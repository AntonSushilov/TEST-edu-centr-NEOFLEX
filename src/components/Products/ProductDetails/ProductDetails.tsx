import { useAppSelector } from "hooks/UseAppSelector";
import React from "react";
import { useParams } from "react-router-dom";
import { TProductInfo } from "utils/types";
import styles from "./ProductDetails.module.css";
const ProductDetails = () => {
  const { id } = useParams();
  const selectedProduct = useAppSelector(
    (store) =>
      store.productInfoReducer.productInfoList.find(
        (el: TProductInfo) => el.id === Number(id)
      )
    // shallowEqual
  );
  return (
    <div className={styles.product_details}>
      {selectedProduct ? (
        <>
          <img src={selectedProduct.img} alt="" />
          <div>Название: {selectedProduct.title}</div>
          <div>Цена: {selectedProduct.price}</div>
          <div>
            Скидка: {selectedProduct.discount ? selectedProduct.discount : 0}%
          </div>
        </>
      ) : (
        // <img className={styles.product_image} src={selectedProduct.img} />
        <div>Не найдено</div>
      )}
    </div>
  );
};

export default ProductDetails;
