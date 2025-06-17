import react from "react";
import Button from "../Button/Button";
import { colors } from "@/utils/styles";

interface SingleCoverProps {
  item: {
    name: string;
    description: string;
    imageLink: string;
  };
}

const SingleCover: React.FC<SingleCoverProps> = ({ item }) => {
  return (
    <div
      className="absolute flex flex-col justify-center items-center h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${item.imageLink})` }}
    >
      {/* Overlay for reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <h1 className=" border-black md:w-[80%] lg:w-[60%] px-4 text-center text-white">
          {item.name}
        </h1>
        <p className="text-center md:w-[70%] px-4 py-10 text-white">
          {item.description}
        </p>
        <form action="" className="flex flex-col md:flex-row items-center mt-6">
          <input
            type="text"
            placeholder="Enter your email"
            className="rounded-full h-12 bg-white px-10  mb-4 md:mb-0 md:mx-[20px] md:w-[400px] w-[100%]"
          />
          <Button
            link="#"
            name="Sign Up"
            textColor={colors.white}
            bgColor={colors.blue}
            hoverColor={colors.yellow}
            borderColor={colors.blue}
          />
        </form>
      </div>
    </div>
  );
};

export default SingleCover;
