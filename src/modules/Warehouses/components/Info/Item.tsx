import styles from "./Info.module.scss";
import type { ISales } from "../../../../types";

export const Item = ({ amount, batch, price }: ISales) => {
  return (
    <div className={styles.item}>
      <div className={styles.productName}>Продукт: {batch}</div>
      <div className={styles.productPrice}>Количество: {amount}</div>
      <div className={styles.productPrice}>Цена: {price}</div>
    </div>
  );
};
