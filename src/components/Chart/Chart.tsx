import "./Chart.css";
import Plot from "react-plotly.js";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

const Chart = () => {
  const [X, setX] = useState([]);
  const [Y, setY] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [symbol, setSymbol] = useState<string>("IBM");
  let stockX: any = [];
  let stockY: any = [];
  const API_KEY: string = "8VGREADYSKK21WEN";
  const url: string = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`;
  const ApiCall = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await (await fetch(url)).json();
      console.log(data);
      for (let key in data["Time Series (Daily)"]) {
        stockX.push(key);
        stockY.push(data["Time Series (Daily)"][key]["1. open"]);
      }
      // console.log(stockY);
      console.log(stockY);
      console.log(stockX);
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
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="wrapp">
      <p data-aos="fade-right">
        Four years ago when I started studing technical physics I realised that
        statistical mathematics is "my thing". After a year I changed my degree
        from physics to computer science and econometrics at the same
        university. I wanted to build more advanced trading bots on a stock
        market and that was my first coding experience. My university degree lay
        emphasis on data science which is my second scope of interest. I like to
        learn statistical mathematics and know how to use it to analyze data. In
        a near future I want to build website about stock analysis that is using
        machine learning solutions and data science tricks which will help me
        write my bachelors diploma about Theoretical and Practical aspects of
        Algorithmic Trading.
      </p>
      <label data-aos="zoom-in">
        Choose a company to display stock prices!:
      </label>

      <select
        data-aos="zoom-in"
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
            title: `Stock value of ${symbol} in dollars`,
          }}
        />
      </div>
    </div>
  );
};
export default Chart;
