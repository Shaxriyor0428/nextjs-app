import React from "react";
import ProductComponent from "../../components/products/Product";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <ProductComponent
        reverce={true}
        bg_color="#F2CEDA"
        image="/images/pricing.png"
        title="Brown Sugar Oatmea"
        btn_title="See Details"
        desc="Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous."
      />
      <div className="min-h-[700px] bg-main_bg flex items-center pb-10">
        <div className="container px-4 flex flex-wrap">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/images/pricing2.png"
              alt="Ice Cream"
              className="max-w-xs"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-[32px] font-bold mb-4">
              Simple Way To Order Your Food
            </h1>
            <p className="text-gray-700 mb-6">
              Some food has looked so awful that it's looked like something that
              the dog's brought home, yet after one mouthful I've been left
              eating my thoughts.
            </p>
            <ul className="mb-6">
              <li className="mb-2 flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" /> Select Your Food
              </li>
              <li className="mb-2 flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" /> Add To Cart
              </li>
              <li className="mb-2 flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" /> Order Your Food
              </li>
            </ul>
            <div className="flex ">
              <button className="bg-main_bg text-white px-6 py-2 rounded">
                <img src="/images/google.png" alt="" />
              </button>
              <button className="bg-main_bg text-white px-6 py-2 rounded">
                <img src="/images/app_store.png" alt="App store" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
