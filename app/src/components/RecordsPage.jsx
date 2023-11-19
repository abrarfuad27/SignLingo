import React from "react";
import { useContext, useState, useEffect } from "react";
import { userContext } from "../UserContext";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
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

  return (
    <div>
      <Navbar />
      <button onClick={signout}>Log Out</button>
    </div>
  );
}
