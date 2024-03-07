import React, { createContext, useEffect, useState, useContext } from "react";
import makeApiCall from "../api";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [cyptoData, setCyptoData] = useState(null);
  const [price, setPrice] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [topThree, setTopThree] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [error, setError] = useState("");

  const fetchAllDetails = async (token) => {
    console.log("Calling all functions");
    setIsDataLoaded(false);
    try {
      await Promise.all([
        fetchCoinDetails(token),
        fetchCyptoPrice(token),
        fetchTrendingData(),
      ]);
      setIsDataLoaded(true);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  const fetchCyptoPrice = async (token) => {
    console.log("fetching coin price");
    const method = "GET";
    const url = "https://api.coingecko.com/api/v3/simple/price";
    const params = {
      ids: token,
      vs_currencies: "inr,usd",
      include_24hr_change: true,
    };
    try {
      const res = await makeApiCall(url, method, params);
      setPrice(res.data);
    } catch (err) {
      if (err.response.status === 404) {
        setError("Coin Not Fount");
      }else if(err.response.status === 429){
        setError("Too Many Request's... Try again after 60 secounds");
      }
      console.log(err);
    }
  };

  const fetchCoinDetails = async (token) => {
    console.log("fetching coin details");
    const method = "GET";
    const url = `https://api.coingecko.com/api/v3/coins/${token}`;
    try {
      const res = await makeApiCall(url, method, null);
      setCyptoData(res.data);
    } catch (err) {
      if (err.response.status === 404) {
        setError("Coin Not Fount");
      }else if(err.response.status === 429){
        setError("Too Many Request's... Try again after 60 secounds");
      }
      console.log(err);
    }
  };
  const fetchTrendingData = async () => {
    console.log("fetching trending");
    const method = "GET";
    const url = "https://api.coingecko.com/api/v3/search/trending";
    try {
      const res = await makeApiCall(url, method, null);
      const coins = [...res.data.coins];
      setTrendingCoins(res.data.coins);
      setTopThree(coins.splice(0, 3));
    } catch (err) {
      if (err.response.status === 404) {
        setError("Coin Not Fount");
      }else if(err.response.status === 429){
        setError("Too Many Request's... Try again after 60 secounds");
      }
      console.log(err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        cyptoData,
        trendingCoins,
        topThree,
        fetchAllDetails,
        error,
        isDataLoaded,
        price,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
