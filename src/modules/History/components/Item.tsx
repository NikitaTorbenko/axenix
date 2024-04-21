import styles from "./Item.module.scss";
import type { IMovements } from "../../../types";

export const Item = ({ from, to, movements, transport }: IMovements) => {
  return (
    <div className={styles.item}>
      <div className={styles.productName}>Точка отправки {from.name}</div>
      <div className={styles.productName}>Точка получения {to.name}</div>
      <div className={styles.productName}>Транспорт {transport.id}</div>
      <div className={styles.productName}>
        Объем перевозки{transport.volume}
      </div>
      <div className={styles.info}>
        {movements.map((el) => (
          <>
            <div className={styles.productName}>Продукт: {el.batch}</div>
            <div className={styles.productPrice}>Количество: {el.amount}</div>
            <div className={styles.productPrice}>Цена: {el.product.name}</div>
          </>
        ))}
      </div>
    </div>
  );
};
