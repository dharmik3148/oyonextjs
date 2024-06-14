const Header2 = () => {
  const List = [
    {
      name: "Surat",
    },
    {
      name: "Banglore",
    },
    {
      name: "Delhi",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Hyderabad",
    },
  ];

  return (
    <div>
      <div className="flex px-10 py-1 bg-gray-100 justify-between">
        {List.map((e) => {
          return <span key={e.name}>{e.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Header2;
