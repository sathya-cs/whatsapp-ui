import React from "react";
import Titlecard from "../../components/ui/Titlecard/Titlecard";
import classes from "./dashboard.module.css";
import Widget from "../../components/ui/widget/Widget";
import Card from "../../components/ui/card/Card";
import Biechart from "../../components/ui/chart/biechart/Biechart";
/**icons used for widget components******/
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import SendIcon from "@mui/icons-material/Send";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CachedIcon from "@mui/icons-material/Cached";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { CgEditBlackPoint } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
/****charts*******/
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
/********widget components data******/
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

const Dashboard = () => {
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
    <>
      <Titlecard title="Whatsapp / Dashboard" />
      <main className={classes.main}>
        <Card className={classes.card}>
          <div className={classes.heading}>
            <span className={classes.overview}>Overview</span>
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
        <div className={classes.chartlayout}>
          <Card className={classes.biechart}>
            <div className={classes.biechartheader}>
              <span className={classes.chartheading}>
                Cummulative SMS Analysis
              </span>
              <input type="date" className={classes.biechartdateselect} />
              <select className={classes.biechartsenderselect}>
                <option>All Sender</option>
                <option>Sender A</option>
                <option>Sender B</option>
                <option>Sender C</option>
              </select>
            </div>
            <hr></hr>

            <div className={classes.biechartmain}>
              <Biechart />
            </div>
          </Card>
          <Card className={classes.chartcard}>
            <div className={classes.charttitle}>
              <span className={classes.chartheading}>Total Conversations</span>
              <div className={classes.kebab}>
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className={classes.inputfield}>
              <select className={classes.barchartselect}>
                <option>All</option>
                <option>User initiated</option>
                <option>Business initiated</option>
                <option>Total</option>
              </select>
            </div>
            <div className={classes.barchart}>
              <div className={classes.chart}>
                <Bar options={options} data={data} />
              </div>
            </div>
            <div className={classes.legend}>
              <div className={classes.legenditem}>
                <CgEditBlackPoint className={classes.btn1} />
                <span className={classes.legendtitle}>User initiated</span>
              </div>
              <div className={classes.legenditem}>
                <CgEditBlackPoint className={classes.btn2} />
                <span className={classes.legendtitle}>Business initiated</span>
              </div>
              <div className={classes.legenditem}>
                <CgEditBlackPoint className={classes.btn3} />
                <span className={classes.legendtitle}>Total</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
