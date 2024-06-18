import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="w-7/12 mx-auto my-10">
      <Image
        src={
          "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full h-large-box my-5 mx-auto rounded-lg"
      />
      <div className="">
        <h3 className="text-3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste hic
          molestiae voluptate doloremque. Dignissimos, quisquam?
        </h3>
        <p className="text-xl my-5 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          impedit rem perspiciatis ab laborum nemo sint veniam mollitia saepe
          ducimus nihil quidem, dolore debitis? Esse recusandae cum iure quasi
          debitis placeat praesentium pariatur possimus reiciendis molestiae
          illo a nesciunt corrupti iste eum dolorem itaque delectus cupiditate
          fuga odit, molestias rerum.
        </p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 hover:bg-blue-500 font-semibold text-lg">
          Price : 4500
        </button>
        <p className="text-3xl font-bold my-5">Facilities : </p>
        <ul className="flex text-[18px] font-semibold justify-between">
          <li>Swimming Pool</li>
          <li>Dogs</li>
          <li>Garden</li>
          <li>Laundry</li>
          <li>Box Cricket</li>
        </ul>
        <button className="w-60 h-14 rounded-lg bg-red-400 hover:bg-red-500 font-semibold my-5 text-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
