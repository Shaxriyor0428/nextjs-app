import React from "react";
import ProductComponent from "../../components/products/Product";

const Product = () => {
  return (
    <div className="min-h-[58vh] my-10">
      <div className="container my-12">
        <h2 className="leading-[61px] text-[44px] font-semibold text-center mb-[64px]">
          Our Product
        </h2>
        <ul className="flex justify-center gap-10">
          <li className="font-medium text-lg cursor-pointer duration-300 border-b-4 border-transparent hover:border-red-500">
            ICE CREAM
          </li>
          <li className="font-medium text-lg cursor-pointer duration-300 border-b-4 border-transparent hover:border-red-500">
            CAYENNE CHOCOLATE
          </li>
          <li className="font-medium text-lg cursor-pointer duration-300 border-b-4 border-transparent hover:border-red-500">
            CAKE BATTER
          </li>
          <li className="font-medium text-lg cursor-pointer duration-300 border-b-4 border-transparent hover:border-red-500">
            CANDY CANE
          </li>
          <li className="font-medium text-lg cursor-pointer duration-300 border-b-4 border-transparent hover:border-red-500">
            PLATTERS
          </li>
          <li className="font-medium text-lg cursor-pointer duration-300 border-b-4 border-transparent hover:border-red-500">
            DESSERT
          </li>
        </ul>
      </div>
      <ProductComponent
        price={true}
        image="/images/product1.png"
        title="Brown bread"
        desc="Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene."
      />
      <ProductComponent
        price={true}
        image="/images/product2.png"
        title="Cayenne chocolate"
        reverce={true}
        desc="Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast foo d scene.Bon Au Pain is a pioneer in the healthy fast food scene."
      />
      <ProductComponent
        price={true}
        image="/images/product3.png"
        title="Sweet corn"
        reverce={false}
        desc="Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene."
      />
    </div>
  );
};

export default Product;
