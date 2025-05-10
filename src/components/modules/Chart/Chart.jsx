import { convertData } from "@/helpers/ConvertData";
import classes from "./Chart.module.css";
import { useState } from "react";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  Line,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

function Chart({ chart, setChart }) {
  console.log(chart);
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));

  const typeHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      const type = e.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={classes.chart}>
        <div className={classes.name}>
          <img src={chart.coin.image} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={classes.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>

        <div className={classes.types} onClick={typeHandler}>
          <button className={type === "prices" ? classes.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? classes.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volume" ? classes.selected : null}>
            Total Volumes
          </button>
        </div>
        <div className={classes.details}>
          <div>
            <p>Prices:</p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>${chart.coin.ath}</span>
          </div>
          <div>
            <p>Prices:</p>
            <span>${chart.coin.market_cap}</span>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <CartesianGrid stroke="#404042" />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <Tooltip />
        <Legend />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
      </LineChart>
    </ResponsiveContainer>
  );
};
