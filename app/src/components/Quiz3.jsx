import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function Quiz3() {
  const [responseMessage, setResponseMessage] = useState(null);

  const sendPhoto = async () => {
    try {
      const formData = new FormData();
      formData.append("file", document.getElementById("fileInput").files[0]);

      const response = await axios.post("http://127.0.0.1:5000/api/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("Error sending photo:", error);
      setResponseMessage("Error occurred");
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <input type="file" id="fileInput" />
        <button onClick={sendPhoto}>Send Photo</button>
        {responseMessage && <p>Response: {responseMessage}</p>}
      </div>
    </>
  );
}
