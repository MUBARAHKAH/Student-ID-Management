import React, { useEffect, useState } from "react";
import IdCardDetails from "../IDcardDetails";
<<<<<<< HEAD
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const IdentityCards = () => {
  const [idcards, setIdcards] = useState([]);
  useEffect(() => {
    (async function fetchUserData() {
      try {
        const response = await fetch(
          `https://studentbackendportal.onrender.com/idcard`
        );
        const data = await response.json();
        setIdcards(data);
=======
import { initialUserData } from "../../data.js";
import axios from "axios";
import QRCode from "./QrCodeDisplay";
import { Outlet } from "react-router-dom";
import QrCodeDisplay from "./QrCodeDisplay";
import { useSession } from "../../../context/session";

const IdentityCards = () => {
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
        setData(data);
>>>>>>> a2bb7f1e3e68f57cf3f15d5eb8347aff16a1d038
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    })();
  }, []);
<<<<<<< HEAD
  const navigate = useNavigate();
  const HandleDelete = async (_id) => {
    try {
      const response = await axios.delete(
        `https://studentbackendportal.onrender.com/idcard/delete/${_id}`
      );
      if (response.status === 200) navigate("/");
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };
  return (
    <div className="flex flex-col gap-[2rem] p-[2rem_1rem]  w-full">
      <div className="flex max-lg:flex-col justify-between  gap-[1rem]">
        <h2 className="text-xl font-semibold">User IdCards</h2>
      </div>

      <div className="flex flex-wrap gap-[1rem] justify-center items-center">
        {idcards.length > 0 ? (
          idcards.map(
            (
              { fullName, _id, matricNimber, level, department, email, userId,photo },
              index
            ) => (
              <div
                className="space-y-[1rem] rounded-md p-8 w-full  bg-white  sm:w-[40%]"
                key={index}
              >
                <IdCardDetails
                  data={{
                    fullName,
                    _id,
                    matricNimber,
                    level,
                    department,
                    email,
                    photo
                  }}
                />
                <div
                  className="bg-red-500 text-white cursor-pointer text-center w-full p-[1rem] rounded-md"
                  onClick={() => HandleDelete(userId)}
                >
                  Revoke Id card
                </div>
              </div>
            )
          )
        ) : (
          <div>No Idcards Found</div>
        )}
=======
  return (
    <div className="flex max-lg:flex-col gap-[2rem] p-[2rem_1rem]  w-full">
      <div className="sm:w-[50%] w-full">
        <div className="flex max-lg:flex-col w-full justify-between  gap-[1rem]">
          <h2 className="text-xl font-semibold ml-20">Your ID Card</h2>
        </div>
        <div className=" bg-white p-5 rounded-lg mt-2">
          <div className="flex gap-[1rem] justify-between">
            {message !== "pending" ? (
              <QrCodeDisplay data={data.qrcode} message={message} />
            ) : (
              <p className="text-sm text-center p-[1rem] ml-20">
                Kindly wait for the admin to generate your Id card
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[50%] ">
        <IdCardDetails message={message} data={data} />
>>>>>>> a2bb7f1e3e68f57cf3f15d5eb8347aff16a1d038
      </div>
    </div>
  );
};
export default IdentityCards;
