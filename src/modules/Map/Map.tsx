import styles from "./Map.module.scss";
import { YMaps, Placemark } from "react-yandex-maps";

export const Map = () => {
  return (
    <YMaps>
      <Map
        onClick={onClickMapHandle}
        className={styles.map}
        defaultState={{ center: [46.095805, 36.901504], zoom: 8 }}
      >
        <Placemark geometry={coords} />
        {data?.map((item) => (
          <PlacemarkTrash
            onClick={() => onClickPlacemarkHandle(item.id)}
            indexColor={item.level}
            coords={item.coords}
          />
        ))}
      </Map>
    </YMaps>
  );
};
