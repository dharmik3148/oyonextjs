import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";

const Hotels = () => {
  return (
    <>
      <Header1 />
      <div className="flex flex-col m-5">
        <Hotel />
        <Hotel />
      </div>
    </>
  );
};

export default Hotels;
