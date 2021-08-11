import "./Chart.css";
import Plot from "react-plotly.js";

import { useEffect, useState } from "react";

const Chart = () => {
  const [X, setX] = useState([]);
  const [Y, setY] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [symbol, setSymbol] = useState("IBM");
  let stockX: any = [];
  let stockY: any = [];
  const API_KEY = "8VGREADYSKK21WEN";
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`;
  const ApiCall = async () => {
    try {
      setLoading(true);
      const data = await (await fetch(url)).json();
      for (let key in data["Time Series (Daily)"]) {
        stockX.push(key);
        stockY.push(data["Time Series (Daily)"][key]["1. open"]);
      }
      // console.log(stockY);
      setX(stockX);
      setY(stockY);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // const fetchStock = async () => {
    //   const data = await (await fetch(url)).json();
    //   for (let key in data["Time Series (Daily)"]) {
    //     stockX.push(key);
    //     stockY.push(data["Time Series (Daily)"][key]["1. open"]);
    //   }
    //   // console.log(stockY);
    //   setX(stockX);
    //   setY(stockY);
    // };
    // setLoading(1);
    // fetchStock();
    // setLoading(0);

    ApiCall();
    // console.log(loading);
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     for (let key in data["Time Series (Daily)"]) {
    //       stockX.push(key);
    //       stockY.push(data["Time Series (Daily)"][key]["1. open"]);
    //     }
    //     // console.log(stockY);
    //     let parsedY = setX(stockX);
    //     setY(stockY);
    //   });
    // setLoading(false);
  }, [symbol]);
  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);

  return (
    <div className="wrapp">
      <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </p>
      <label>Choose a company to display stock prices!:</label>

      <select
        onChange={(e) => {
          const selectedSymbol = e.target.value;
          setSymbol(selectedSymbol);
        }}
      >
        <option value="IBM">IBM</option>
        <option value="FB">Facebook</option>
        <option value="MSFT">Microsoft</option>
        <option value="AAPL">Apple</option>
      </select>
      {loading ? <span>Loading...</span> : <span>Data fetched!</span>}
      <div className="plot">
        <Plot
          data={[
            {
              x: X,
              y: Y,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "green" },
            },
          ]}
          layout={{
            width: 600,
            height: 400,
            title: `Stock value of ${symbol}`,
          }}
        />
      </div>
    </div>
  );
};
export default Chart;
