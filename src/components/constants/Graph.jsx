import React, { useEffect, useRef, memo } from "react";
import { useData } from "../../contexts/CoinData";

const Graph = () => {
  const container = useRef();
  const { cyptoData } = useData();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "COINBASE:${cyptoData.symbol.toUpperCase()}USD|7D"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": 500,
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 1,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1w|15",
            "1m|30",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
          ],
          "lineColor": "rgba(41, 98, 255, 0.74)"
        }`;
    container.current.appendChild(script);
  }, []);

  //   if (!cyptoData) return <div>Loading</div>;

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default memo(Graph);
