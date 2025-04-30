import classes from "./Chart.module.css";

function Chart({ chart, setChart }) {
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
