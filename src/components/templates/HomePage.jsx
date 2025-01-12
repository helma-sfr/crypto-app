import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCoins = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getCoins();
  }, []);

  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
