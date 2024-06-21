import Filters from "@/components/Filters";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
  const [list, setList] = useState([]);
  const [price, setPrice] = useState(2000);
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckList = async () => {
    const { data } = await axios.get(
      `/api/facilities/search?val=${checkedList}`
    );
    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);

    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  useEffect(() => {
    if (checkedList) {
      handleCheckList();
    }
  }, [checkedList]);

  return (
    <>
      <Head>
        <title>All Hotels</title>
      </Head>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            setCheckedList={setCheckedList}
          />
        </div>
        <div className="col-span-9">
          {list.length > 0
            ? list.map((e) => {
                return (
                  <div className="flex flex-col m-5 col-span-9" key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className="flex flex-col m-5 col-span-9" key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allHotels,
    },
  };
}

export default Hotels;
