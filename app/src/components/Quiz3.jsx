import React, { useEffect, useState, Component } from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Quiz3() {

  Helper();

  return (
    <>
      <Navbar />
    </>
  );
}

function Helper() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/data');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && <div>{data.key}</div>}
    </div>
  );
}
