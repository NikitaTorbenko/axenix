import styles from "./Map.module.scss";
import { YMaps, Placemark } from "react-yandex-maps";
import { mainApi } from "../../api/servises";

export const Map = () => {
  const { data } = mainApi.useGetPointsQuery();

  return (
    <YMaps>
      <div>
        <Map
          className={styles.map}
          defaultState={{ center: [46.095805, 36.901504], zoom: 8 }}
        >
          {data.map((location, index) => (
            <Placemark
              key={index}
              geometry={location.coords}
              options={{
                preset:
                  location.type === "склад"
                    ? "islands#blueCircleDotIcon"
                    : "islands#redCircleDotIcon",
              }}
              properties={{
                hintContent:
                  location.type === "склад" ? "Склад" : "Точка продажи",
                balloonContent:
                  location.type === "склад" ? "Это склад" : "Это точка продажи",
              }}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};
