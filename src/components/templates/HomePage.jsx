import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin/TableCoin";
import { getCoinList } from "../services/cryptoApi";
import Pagination from "../modules/Pagination/Pagination";

function HomePage() {
  const [page, setPage] = useState(1)
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getCoins = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getCoins();
  }, [page]);

  return (
    <div>
      <Pagination page={page} setPage={setPage} />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
