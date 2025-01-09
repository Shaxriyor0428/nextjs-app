"use client";
import React from "react";

interface ITestimonials {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const TESTIMONIALS: ITestimonials[] = [
  {
    id: 1,
    image: "/images/car.png",
    title: "Free Shipping",
    desc: "Last Chance! Free shipping on all orders ends today.",
  },
  {
    id: 2,
    image: "/images/bag.png",
    title: "Quick Packaging",
    desc: "Last Chance! Free shipping on all orders ends today.",
  },
  {
    id: 3,
    image: "/images/cash.png",
    title: "100% Money Back",
    desc: "Last Chance! Free shipping on all orders ends today.",
  },
  {
    id: 4,
    image: "/images/delivery.png",
    title: "Fast Delivery",
    desc: "Last Chance! Free shipping on all orders ends today.",
  },
];

const Testimonials = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <div className=" container flex gap-10 rounded-lg">
        {TESTIMONIALS.map((item: ITestimonials) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-[15px_0px_25px_rgba(0,0,0,0.2)]  transition-shadow duration-300"
          >
            <img src={item.image} alt={item.title} className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
