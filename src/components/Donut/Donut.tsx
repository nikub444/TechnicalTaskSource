import React from "react";
import { Pie } from "react-chartjs-2";
import "./Donut.css";

type DataSet = {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
  hoverOffset: number;
};

type StockData = {
  labels: string[];
  datasets: DataSet[];
};

const data: StockData = {
  labels: ["Back-end", "Front-End", "Data Science", "Design"],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 30, 25, 15],
      backgroundColor: [
        "rgba(243, 98, 166, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "#ff0037",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
      hoverOffset: 2,
    },
  ],
};

const Donut = () => (
  <>
    <h1 className="title" data-aos="fade-down">
      My Scope of Interest{" "}
    </h1>
    <div className="wap">
      <div className="wrapper-donut">
        <Pie data={data} />
      </div>
      <p data-aos="fade-left">
        Hi! I am react/fullstack developer with almost one year commercial
        experience as a javascript developer. I like to learn everything that is
        connected to IT industry! I am student of a third year at AGH university
        of science and technology at the faculty of computer science and
        econometrics. I wrote my first program 4 years ago in C that was used
        for algo trading. I wanted to show my program to the world so I started
        to build my own blog about algorithmic trading on wordpress. Immediately
        I realised I want to become professional web developer in a future! I
        continously develop my portfolio and mainly focus on MERN stack, but
        also I know basics of Angular.js, Vue.js, Python and C#. Currently I am
        mastering Typescript and how to integrate it with React, Node.js and
        GraphQL. I am eager to learn new technologies and improve my skills in
        front-end/back-end.
      </p>
    </div>
  </>
);

export default Donut;
