import { Line } from "react-chartjs-2";
import "./Chart.scss";

const exampleData = [{ label: "qwdwdq", value: 24 }];

export const Chart = () => {
  return (
    <div>
      <Line
        data={{
          labels: exampleData.map((el) => el.label),
          datasets: [
            {
              label: "Наш показатель",
              data: exampleData.map((el) => el.value),
              backgroundColor: "red",
              borderColor: "red",
            },
            {
              label: "Наш второй показатель",
              data: exampleData.map((el) => el.value),
              backgroundColor: "blue",
              borderColor: "blue",
            },
          ],
        }}
      />
    </div>
  );
};
