import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import Head from "next/head";

const Hotels = ({ hotels }) => {
  return (
    <>
      <Head>
        <title>All Hotels</title>
      </Head>
      <Header1 />
      {hotels
        ? hotels.map((e) => {
            return (
              <div className="flex flex-col m-5" key={e._id}>
                <Hotel e={e} />
              </div>
            );
          })
        : ""}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `http://localhost:3000/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allHotels,
    },
  };
}

export default Hotels;
