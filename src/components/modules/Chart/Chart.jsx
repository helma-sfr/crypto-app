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
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  return (
    <div className={classes.container}>
      <span className={classes.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={classes.chart}>
        <div className={classes.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
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
