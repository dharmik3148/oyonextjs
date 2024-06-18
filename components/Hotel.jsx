import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
  return (
    <div className="border-[3px] border-gray-300 hover:border-gray-600 rounded-lg h-fit w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={
            "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
          }
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-60 mr-3 rounded-[6px]"
        />
        <div className="grid grid-rows-3 gap-2">
          <Image
            src={
              "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
          <Image
            src={
              "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28"
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-3xl line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            adipisci.
          </h2>
          <p className="text-justify my-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            corrupti ipsa eaque quidem, illum eius repellendus, vero deleniti
            placeat asperiores delectus illo exercitationem ex! Totam odio fuga
            ad doloribus et.
          </p>
          <p className="text-2xl my-5">
            <span className="font-bold">Facilities : </span>
            <span>Free wifi, Pet care, Swimming Pool, Beaches, Resort</span>
          </p>
          <div className="flex items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 hover:bg-blue-500 font-semibold text-lg">
              Price : 4500
            </button>
            <Link
              href={"/hotels/2"}
              className="text-xl font-bold text-red-600 ml-10"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
