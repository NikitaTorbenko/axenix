import styles from "./Info.module.scss";
import { IoIosArrowDown } from "react-icons/io";

interface IProductItem {
  product_name: string;
  product_price: string;
}

interface Props {
  place_from: string;
  place_to: string;
  transport: string;
  data: IProductItem[];
}

export const Item = ({ data, transport, place_from, place_to }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.infoWrap}>
        <div className={styles.productName}>{place_from}</div>
        <div className={styles.productName}>{place_to}</div>
        <div className={styles.productName}>{transport}</div>
      </div>
      <IoIosArrowDown />
    </div>
  );
};
