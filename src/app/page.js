"use client"

import { useState} from "react";
import data from '../../src/app/data.json'


const Country=()=>{
  const [countryId, setCountryId] = useState([]);

//   useEffect(() => {
//     const getCountry = async ()=>{
//       const res=await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
//       .then(res => res.json())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//       const getRes=await res.json()

//       setCountry(await getRes)
//     }
//     getCountry()
//   }, [])
  

  }



export default function Home() {

  const [countryId, setCountryId] = useState('');
  const [state, setstate] = useState([]);
  const [stateId, setstateId] = useState('');

  const handleChange=(e)=>{
    const getCountryId=e.target.value;
    console.log(getCountryId)
  }


  return (
    <main className="flex flex-col w-screen h-screen p-24 bg-slate-500">
      <div className="w-full h-1/2 flex flex-col gap-6 justify-center items-center bg-red-400 rounded-2xl ">

        <h2 className="font-bold text-3xl">Select Country and State of Your Choice</h2>
        <select name="Country" id="_1"  className="border-solid border-black border-[2px]  w-1/2 rounded-xl p-1" onChange={(e)=>{handleChange(e)}}>
          <option value="" className="text-center">--Country--</option>
        {
          data.map((getCountry,index)=>(
            <option value={getCountry.country_id} key={index} >{getCountry.country_name}</option>
          ))
        }</select>

        {/* <select name="Country" id="_1" className="border-[2px] border-solid border-black w-1/2 rounded-xl p-1"><option value="" className="text-center">--State--</option></select> */}

      </div>
    </main>
  );
}
