import { RotatingLines } from "react-loader-spinner";

import chartUp from "@/assets/chart-up.svg";
import chartDown from "@/assets/chart-down.svg";

import classes from "./TableCoin.module.css";

function TableCoin({ coins, isLoading }) {
  console.log(coins);
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
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    image,
    symbol,
    name,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
}) => {
  return (
    <tr>
      <td>
        <div className={classes.symbol}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? classes.success : classes.error}>
        {price_change != null ? price_change.toFixed(2) : "N/A"}
      </td>
      <td>{total_volume.toLocaleString()}</td>
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
