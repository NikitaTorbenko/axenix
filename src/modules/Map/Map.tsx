import { useState, useEffect } from "react";
import styles from "./Map.module.scss";
import { YMaps, Placemark } from "react-yandex-maps";

interface Location {
  coords: number[]; // Координаты [широта, долгота]
  type: string; // Тип локации: "склад" или "точка продажи"
}

export const Map = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/locations"); // Замените '/api/locations' на ваш эндпоинт
        const data: Location[] = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <YMaps>
      <div>
        <Map
          className={styles.map}
          defaultState={{ center: [46.095805, 36.901504], zoom: 8 }}
        >
          {locations.map((location, index) => (
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
