import React from "react";
import classes from "./home.module.css";
import Widget from "../../components/ui/widget/Widget";
import Card from "../../components/ui/card/Card";

import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import SendIcon from "@mui/icons-material/Send";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CachedIcon from "@mui/icons-material/Cached";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import AdjustIcon from "@mui/icons-material/Adjust";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const widgetdata = [
  { count: 1081, messageaction: "sent", icon: <DoneIcon /> },
  { count: 1062, messageaction: "Delivered", icon: <DoneAllIcon /> },
  { count: 946, messageaction: "Read", icon: <RemoveRedEyeIcon /> },
  { count: 83, messageaction: "Replied", icon: <ReplyAllIcon /> },
  { count: 0, messageaction: "Sending", icon: <SendIcon /> },
  { count: 2, messageaction: "Failed", icon: <HighlightOffIcon /> },
  { count: 0, messageaction: "processing", icon: <CachedIcon /> },
  { count: 0, messageaction: "Queued", icon: <AutoAwesomeMotionIcon /> },
];

const Home = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [180, 600, 800],
        barThickness: 30,

        borderRadius: {
          topLeft: 15,
          topRight: 15,
        },

        backgroundColor: [
          "rgb(245, 110, 179)",
          "rgb(75, 86, 210)",
          "rgb(244, 157, 26)",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: "Count",
        position: "left",
        color: "rgb(0,0,0,)",
      },
    },
    maintainAspectRatio: false,
    legend: false,
    scales: {
      x: {
        display: true,

        ticks: {
          display: false,
        },

        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
      },

      y: {
        beginAtZero: true,
        border: {
          display: false,
          dash: [10, 10],
        },

        min: 0,
        max: 800,
        ticks: {
          stepSize: 200,
        },
      },
    },
  };

  return (
    <div className={classes.home}>
      <div className={classes.homecontainer}>
        <Card className={classes.card}>
          <div className={classes.heading}>
            <h2>Overview</h2>
          </div>
          <div className={classes.widgetcards}>
            {widgetdata.map((data) => {
              return (
                <Widget
                  count={data.count}
                  messageaction={data.messageaction}
                  icon={data.icon}
                />
              );
            })}
          </div>
        </Card>
        <Card className={classes.chartcard}>
          <div className={classes.kebab}> &#9679; &#9679; &#9679;</div>
          <h2 className={classes.chartheading}>Total Conversations</h2>
          <div className={classes.inputfield}>
            <select>
              <option>All</option>
              <option>User initiated</option>
              <option>Business initiated</option>
              <option>Total</option>
            </select>
          </div>
          <div className={classes.chart}>
            <Bar options={options} data={data} />
          </div>
          <div className={classes.legend}>
            <div className={classes.legenditem}>
              <button className={classes.btn1}>&#9679;</button>
              <span className={classes.legendtitle}>User initiated</span>
            </div>
            <div className={classes.legenditem}>
              <button className={classes.btn2}>&#9679;</button>
              <span className={classes.legendtitle}>Business initiated</span>
            </div>
            <div className={classes.legenditem}>
              <button className={classes.btn3}>&#9679;</button>
              <span className={classes.legendtitle}>Total</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
