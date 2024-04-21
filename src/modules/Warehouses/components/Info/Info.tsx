import styles from "./Info.module.scss";
import { Item } from "./Item";
import { mainApi } from "../../../../api/servises";

export const Info = () => {
  const { data, isLoading } = mainApi.useGetSalesQuery();

  if (isLoading) return <>Loading...</>;

  if (!data) return <>Данных нет</>;

  return (
    <div className={styles.root}>
      {data.map((el) => (
        <Item {...el} />
      ))}
    </div>
  );
};
