import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin/TableCoin";
import { getCoinList } from "../services/cryptoApi";
import Pagination from "../modules/Pagination/Pagination";
import Search from "../modules/Search/Search";

function HomePage() {
  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    setIsLoading(true);
    const getCoins = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getCoins();
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
