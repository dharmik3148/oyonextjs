"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Filters = ({ price, setPrice, handlePrice, setCheckedList }) => {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get(`/api/facilities`);
      if (data.facilities) {
        setList(data.facilities);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChecks = (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setCheckedList(newList);
      return;
    }
    newList = newList.filter((i) => i !== e.target.value);
    setCheckedList(newList);
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <>
      <div className="border-[3px] border-gray-300 rounded-lg my-5 ml-5 p-5 h-auto">
        <label htmlFor="price" className="text-xl mr-3 font-bold">
          Price :
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={400}
          max={4000}
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price ? price : 0}
        />
        <span className="ml-10">&#8377; {price}</span>

        <div>
          <button
            className="w-40 h-10 bg-green-300 cursor-pointer my-3 rounded-lg"
            onClick={handlePrice}
          >
            Search
          </button>
        </div>

        <div className="">
          <h3 className="text-xl font-bold my-3">Filter by facilities : </h3>

          {list?.map((ele, id) => {
            return (
              <p className="grid grid-cols-4 my-3" key={id}>
                <label htmlFor={ele} className="col-span-2">
                  {ele}
                </label>
                <input
                  type="checkbox"
                  name="checkbox"
                  value={ele}
                  id={ele}
                  className="w-4 h-4 ml-3 col-span-1"
                  onChange={handleChecks}
                />
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filters;
