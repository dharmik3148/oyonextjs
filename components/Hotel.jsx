import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <>
      <Head>
        <title>OYO in {e.location}</title>
      </Head>
      <div className="border-[3px] border-gray-300 hover:border-gray-600 rounded-lg h-fit w-full mb-5 p-5">
        <div className="flex">
          <Image
            src={e.banner}
            alt="hotel"
            width={200}
            height={200}
            className="w-96 h-60 mr-3 rounded-[6px]"
          />
          <div className="grid grid-rows-3 gap-2">
            {e?.gallary.map((item, id) => {
              return (
                <Image
                  src={item}
                  alt={`hotel/${id}`}
                  width={200}
                  height={200}
                  className="w-28"
                  key={id}
                />
              );
            })}
          </div>
          <div className="ml-20">
            <h2 className="font-bold text-3xl line-clamp-1">
              {e.name} {`( ${e.location} )`}
            </h2>
            <p className="text-justify my-5 text-lg">{e.description}</p>
            <div className="text-2xl my-5">
              <span className="font-bold">Facilities : </span>
              <ul className="flex gap-[20px]">
                {e ? (
                  e.facilities?.map((ele, id) => {
                    return (
                      <li key={ele.name} className="flex items-center gap-2">
                        <Image
                          src={ele.img}
                          alt={`img/${id}`}
                          width={200}
                          height={200}
                          className="w-7 h-7"
                        />

                        <span className="text-[20px]">{ele.name}</span>
                      </li>
                    );
                  })
                ) : (
                  <li>None</li>
                )}
              </ul>
            </div>
            <div className="flex items-center">
              <button className="w-60 h-14 rounded-lg bg-blue-400 hover:bg-blue-500 font-semibold text-lg">
                Price - &#8377; {e.price}
              </button>
              <Link
                href={`/hotels/${e?._id}`}
                className="text-xl font-bold text-red-600 ml-10"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
