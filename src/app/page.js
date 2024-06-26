"use client";

import { useState,useEffect } from "react";
import data from "../../src/app/data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  const [state, setState] = useState([]);

  const handleChange = (e) => {
    const getCountryId = e.target.value;
    // console.log(getCountryId);

    const getStatedata = data.find(
      (country) => country.country_id === getCountryId
    ).states;
    setState(getStatedata);
  };

  const handleState=(e)=>{
    const stateName=e.target.value
    toast(stateName)
  }

  return (
    <main className="flex flex-col w-screen h-screen p-24 bg-slate-500">
      <div className="w-full h-1/2 flex flex-col gap-6 justify-center items-center bg-red-400 rounded-2xl ">
        <h2 className="font-bold text-3xl">
          Select Country and State of Your Choice
        </h2>
        <select
          name="Country"
          id="_1"
          className="border-solid border-black border-[2px]  w-1/2 rounded-xl p-1"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="country" className="text-center">
            --Country--
          </option>
          {data.map((getCountry, index) => (
            <option value={getCountry.country_id} key={index}>
              {getCountry.country_name}
            </option>
          ))}
          
        </select>

        <select
          name="states"
          id="_2"
          className="border-[2px] border-solid border-black w-1/2 rounded-xl p-1" onChange={(e)=>{handleState(e)}}
        >
          <option value="states" className="text-center">
            --State--
          </option>
          {state.map((getState, index) => (
            <option value={getState.state_name} key={index}  >
              {getState.state_name}
            </option>
          ))}
        </select>

      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
