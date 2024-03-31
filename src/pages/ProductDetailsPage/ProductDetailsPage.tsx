import ProductDetails from "components/Products/ProductDetails/ProductDetails";
import React from "react";
import styles from "./ProductDetailsPage.module.css";
const ProductDetailsPage = () => {
  return (
    <div className={styles.product_details_page}>
      <div className={styles.container}>
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
