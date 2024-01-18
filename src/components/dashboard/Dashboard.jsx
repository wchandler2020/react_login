import React, { useEffect, useState } from "react";
import axios from "axios";
import Logout from "../login/Logout";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const url = "http://localhost:8000/api/dashboard";

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const { data } = await axios.get(url, {
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${accessToken}`,
            },
          });
          console.log("DATA: ", data);
          setMessage(data.response);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);
  console.log(message);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Good Morning, {message}</h1>
      <Logout />
    </div>
  );
};

export default Dashboard;
