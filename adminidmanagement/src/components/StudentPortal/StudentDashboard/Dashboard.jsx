import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import IdCardDetails from "../IDcardDetails";
// import PrintIDCard from "./PrintIDCard ";
import LatestNews from "./LatestNews";
import axios from "axios";

import { useSession } from "../../../context/session";
// import Header from "./Header";

const Dashboard = () => {
  const { sessionData } = useSession();
  const { userId } = sessionData;
  const { token } = sessionData;
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    (async function fetchUserData() {
      try {
        const response = await axios.get(
          `https://studentbackendportal.onrender.com/idcard/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.data;
        if (response.status === 202) {
          setMessage("pending");
        } else if (response.status === 200) {
          setMessage("success");
          setData(data);
        } else {
          setMessage("error");
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    })();
  }, []);
  return (
    <div className="w-full">
      {/* <Header /> */}
<<<<<<< HEAD
      <div className="flex max-lg:flex-col gap-[1rem]  ">
        <ProfileOverview />
        {/* <PrintIDCard /> */}
=======
      <div className="flex max-lg:flex-col gap-[1rem] w-full ">
        <div className="sm:w-[40%]">
          <ProfileOverview />
        </div>
        <IdCardDetails data={data} message={message} />
>>>>>>> a2bb7f1e3e68f57cf3f15d5eb8347aff16a1d038
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
