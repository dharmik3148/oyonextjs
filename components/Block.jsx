import Image from "next/image";

const Block = (props) => {
  return (
    <div className="border-r-2 border-gray-300 w-60 h-full flex items-center px-3">
      <Image
        src={"/demo.svg"}
        alt="demo"
        width={200}
        height={200}
        className="w-11 h-11 p-2  mr-2"
      />
      <div>
        <h3 className="font-bold">{props.title}</h3>
        <p className="text-gray-400 text-xs line-clamp-1">{props.para}</p>
      </div>
    </div>
  );
};

export default Block;
