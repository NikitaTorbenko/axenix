import styles from "./Map.module.scss";
import { YMaps, Placemark } from "react-yandex-maps";
import { mainApi } from "../../api/servises";

export const Map = () => {
  const { data, isLoading } = mainApi.useGetPointsQuery();

  if (isLoading) return <>Loading...</>;

  if (!data) return <>Данных нет</>;

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
                  location.type === "warehouse"
                    ? "islands#blueCircleDotIcon"
                    : "islands#redCircleDotIcon",
              }}
              properties={{
                hintContent:
                  location.type === "warehouse" ? "warehouse" : "shop",
                balloonContent:
                  location.type === "warehouse" ? "Это warehouse" : "Это shop",
              }}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};
