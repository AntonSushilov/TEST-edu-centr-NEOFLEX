import React from "react";
import { TProductInfoList } from "utils/types";
import styles from "./Products.module.css";
import Card from "components/Products/Card/Card";

type TProductProps = {
  title: string;
  products: TProductInfoList;
};

const Products = ({ title, products }: TProductProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.products}>
        {products && products.map((product, index) => (
          <Card key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
