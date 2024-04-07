"use client"

import { useState,useEffect } from "react";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen p-24 bg-slate-500">
      <div className="w-full h-1/2 flex flex-col gap-6 justify-center items-center bg-red-400 rounded-2xl">

        <h2 className="font-bold text-3xl">Select Country and State of Your Choice</h2>
        <select name="Country" id="_1" place className="border-solid border-black border-[2px]  w-1/2 rounded-xl p-1 "><option value="" className="text-center">--Country--</option></select>
        <select name="Country" id="_1" className="border-[2px] border-solid border-black w-1/2 rounded-xl p-1"><option value="" className="text-center">--State--</option></select>

      </div>
    </main>
  );
}


