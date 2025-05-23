import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import { searchCoins } from "@/components/services/cryptoApi";

import classes from "./Search.module.css";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }

    const search = async () => {
      try {
        const res = await fetch(searchCoins(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        console.log(json.coins);
        if (json.coins) {
          setCoins(json.coins);
          setIsLoading(false);
        } else {
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoading(true);
    search();

    return () => controller.abort();
  }, [text]);

  return (
    <div className={classes.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>

   {(!!coins.length || isLoading) && (
       <div className={classes.searchResults}>
       {isLoading && (
         <RotatingLines
           width="50px"
           height="50px"
           strokeWidth="2"
           strokeColor="#3874ff"
         />
       )}
       <ul>
         {coins.map((coin) => (
           <li key={coin.id}>
             <img src={coin.thumb} alert={coin.nme} />
             <p>{coin.name}</p>
           </li>
         ))}
       </ul>
     </div>
   )}
    </div>
  );
}

export default Search;
