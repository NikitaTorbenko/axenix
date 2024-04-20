import styles from "./Info.module.scss";
import { FaRegEdit } from "react-icons/fa";

interface Props {
  product_name?: string;
  product_price?: number;
}

export const Item = ({ product_name, product_price }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.productName}>{product_name}</div>
      <div className="">
        <div className={styles.productPrice}>{product_price}</div>
        <div className={styles.edit}>
          <FaRegEdit />
        </div>
      </div>
    </div>
  );
};
