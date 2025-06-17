import React from "react";
interface SingleExploreProps {
  item: {
    id: number;
    title: string;
    imgUrl: string;
  };
  index: number;
}

const SingleExplore: React.FC<SingleExploreProps> = ({ item, index }) => {
  return (
    <div className="flex flex-col justify-center items-center px-28 h-40 cursor-pointer">
      <div className="flex absolute justify-center items-center text-white h-20 w-20 bg-blue-800 rounded-full my-5 hover:w-24 hover:h-24 ease-in duration-300">
        {item.id}
      </div>
      <span className="absolute font-bold mt-32 text-black">{item.title}</span>
    </div>
  );
};

export default SingleExplore;
