import React from "react";
import classes from "./biechart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const Biechart = () => {
  const data = {
    labels: [
      "DELIVERED",
      "UNDELIV",
      "EXPIRED",
      "DND",
      "PENDING",
      "REJECTED",
      "Others",
    ],
    datasets: [
      {
        label: "sales",
        data: [10, 10, 10, 10, 10, 10, 10],
        backgroundColor: [
          "#52BA9B",
          "#34495E",
          "#BDC3C7",
          "#3798DB",
          "#9B59B6",
          "#8ABB6F",
          "#759C6A",
        ],
        borderWidth: 0,
      },
    ],
  };
  {
    /** const chartLabelsLine = {
    id: "chartLabelsLine",
    afterDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      chart.data.datasets.forEach((dataset, i) => {
        const { x, y } = datapoint.tooltipPosition();
        ctx.fillStyle = dataset.borderColor[index];
        ctx.fill();
      });
    },
  };***/
  }
  const options = {
    plugins: {
      maintainAspectRatio: false,
      layout: {
        padding: 20,
      },
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 30,
          boxHeight: 15,
          useBorderRadius: true,
          borderRadius: 10,
          font: {
            size: 14,
            weight: "bold",
            family: "'Poppins', sans-serif",
          },
        },
        title: {
          color: "#191818",
        },
      },
    },
  };
  return (
    <div className={classes.chartbox}>
      <Pie data={data} options={options}></Pie>
    </div>
  );
};

export default Biechart;
