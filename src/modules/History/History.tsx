import styles from "./History.module.scss";
import { mainApi } from "../../api/servises";
import { Item } from "./components/Item";

export const History = () => {
  const { data, isLoading } = mainApi.useGetMovementsQuery();

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
