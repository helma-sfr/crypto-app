import { RotatingLines } from "react-loader-spinner";

import chartUp from "@/assets/chart-up.svg";
import chartDown from "@/assets/chart-down.svg";

import classes from "./TableCoin.module.css";
import { marketChart } from "@/components/services/cryptoApi";

function TableCoin({ coins, isLoading, setChart }) {
  return (
    <div className={classes.container}>
      {isLoading ? (
        <RotatingLines strokeWidth="2" strokeColor="#3874ff" />
      ) : (
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({ coin, setChart }) => {
  const {
    id,
    image,
    symbol,
    name,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart({...json, coin});
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr>
      <td>
        <div className={classes.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? classes.success : classes.error}>
        {price_change != null ? price_change.toFixed(2) : "N/A"}
      </td>
      <td>${total_volume.toLocaleString()}</td>
      <td>
        <img
          src={
            price_change != null && price_change.toFixed(2) > 0
              ? chartUp
              : chartDown
          }
          alt={name}
        />
      </td>
    </tr>
  );
};
