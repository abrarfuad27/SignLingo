import React from "react";
import { useContext, useState, useEffect } from "react";
import { userContext } from "../UserContext";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

export default function RecordsPage() {
  const { userInfo, setUserInfo } = useContext(userContext);
  const [activityData, setActivityData] = useState([]);
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    if (userInfo.username) {
      const updateRecords = async () => {
        try {
          const userData = {
            username: userInfo.username,
          };
          const response = await axios.post(
            "http://127.0.0.1:5000/api/getrecord",
            userData
          );
          console.log(response.data);
          setActivityData(response.data.activity);
        } catch (err) {
          console.log(`Error->${err}`);
        }
      };
      updateRecords();
    }
  }, [userInfo]);

  function signout() {
    sessionStorage.clear();
    setUserInfo({
      username: "",
      email: "",
      token: "",
    });
    navigate("/");
  }

  const data = {
    labels: activityData,
    datasets: [
      {
        label: "Percentage",
        data: activityData,
        fill: false,
        backgroundColor: "rgb(0,123,255)", // Darker blue
        borderColor: "rgba(0,123,255,0.2)", // Darker blue
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "rgba(0, 0, 0, 0.3)", // Change this value to adjust the color
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div>
      <Navbar />
      <button className="signout-button" onClick={signout}>
        Log Out
      </button>
      <h2 className="mean-score-header">
        Your mean score: {""}
        <span className="mean-score">
          {activityData === null
            ? "Fetching..."
            : (
                activityData.reduce((a, b) => a + b, 0) / activityData.length
              ).toFixed(1)}
        </span>
        %
      </h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
