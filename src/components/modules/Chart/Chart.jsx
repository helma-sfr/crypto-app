import { convertData } from "@/helpers/ConvertData";
import classes from "./Chart.module.css";
import { useState } from "react";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  return (
    <div className={classes.container}>
      <span className={classes.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={classes.chart}></div>
    </div>
  );
}

export default Chart;
