import React, { useContext } from "react";
import { DataLoaderContext } from "../../contexts/DataLoaderProvider";
import { MdStar } from "react-icons/md";
import { IoStarHalfOutline } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";

const HotDeal = () => {
  const { data } = useContext(DataLoaderContext);

  return (
    <div className="w-11/12 mx-auto mt-10 ">
      <div>
        <h1 className="text-3xl lan-primary font-bold text-gray-800">
          <span className="text-[#6C7FD8]">Hot</span> Deals
        </h1>
        <p className="lan-secondary my-2 text-gray-500">
          Don't wait. The time will never be just right.
        </p>
      </div>
      {/* card */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {data
          ?.filter((item) => item.hotDeal)
          .map((item) => (
            <div
              key={item.id}
              className="shadow-lg w-[300px] mx-auto md:w-[290px] rounded-md border-2 border-[#6C7FD8] flex flex-col  relative overflow-hidden bg-white"
            >
              {/* Hot Deal Vertical Label */}
              <div className="absolute left-2 top-3 bg-white">
                <p className="[writing-mode:vertical-rl]  rotate-180 font-bold text-red-600">
                  Hot Deals
                </p>
              </div>

              {/* Product Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-32 mx-auto my-4"
              />

              {/* Cart Icon */}
              <div className="absolute right-2 top-2">
                <button className="border border-gray-400 py-2 px-2 rounded-full bg-white">
                  <RiShoppingBag2Line className="text-[#6C7FD8] text-2xl" />
                </button>
              </div>

              {/* Card Body */}
              <div className="px-4 py-3 border-t border-gray-400 flex-grow flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-500 lan-secondary">{item.stock}</p>
                  <div className="flex text-[#6C7FD8]">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <IoStarHalfOutline />
                  </div>
                </div>

                <h1 className="my-2 text-primary font-bold text-gray-800 ">
                  {item.name}
                </h1>

                <div className="flex justify-between text-gray-800  mt-2">
                  <p className="font-bold text-primary">${item.price}</p>
                  <p>{item.quantity} Left</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HotDeal;
