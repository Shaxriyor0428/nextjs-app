import React, { FC } from "react";

interface IProduct {
  image: string;
  desc: string;
  title: string;
  reverce?: boolean;
  price?: boolean;
  bg_color?: string;
  btn_title?: string;
}

const ProductComponent: FC<IProduct> = ({
  image,
  title,
  desc,
  reverce,
  bg_color,
  price,
  btn_title,
}) => {
  return (
    <div className="h-[544px] w-full" style={{ backgroundColor: bg_color }}>
      <div className="container flex gap-[85px]">
        <div className={`w-1/2 ${reverce ? "order-2" : "order-1"}`}>
          <img src={image} alt="" />
        </div>
        <div
          className={`w-1/2 flex items-center ${
            reverce ? "order-1" : "order-2"
          }`}
        >
          <div>
            <h1 className="font-bold text-[26px] leading-9 mb-3">{title}</h1>
            <p className="mb-7">{desc}</p>
            {price ? (
              <div className="flex items-center mb-3">
                <strong className="text-[24px] font-bold mr-2">$19.55</strong>
                <del className="text-[20px] text-gray-500">$22.55</del>
              </div>
            ) : (
              <></>
            )}
            <button className="bg-btn_color text-white py-[14px] px-[50px] rounded-md font-bold text-[16px] border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500">
              {btn_title ? btn_title : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
