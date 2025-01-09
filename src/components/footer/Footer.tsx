import { FaSquareTwitter } from "react-icons/fa6";

import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A0808] py-10">
      <section className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-10 px-6 md:px-12">
        <div className="text-center md:text-left">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="mx-auto md:mx-0"
            />
          </Link>
          <p className="mt-4">
            Some food has looked so awful that it's looked like something that
            the dog's brought home.
          </p>
          <div className="mt-6">
            <p className="mb-2">Follow Us</p>
            <div className="flex justify-center md:justify-start gap-4">
              <FaFacebookSquare className="text-blue-500 text-2xl" />
              <FaInstagramSquare className="text-2xl text-pink-500" />
              <FaSquareTwitter className="text-2xl text-blue-500 " />
              <FaLinkedin className="text-2xl text-blue-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 text-center md:text-left">
          <Link
            href="/"
            className="font-semibold text-gray-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/product"
            className="font-semibold text-gray-300 hover:text-white"
          >
            Product
          </Link>
          <Link
            href="#"
            className="font-semibold text-gray-300 hover:text-white"
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="font-semibold text-gray-300 hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/testimonials"
            className="font-semibold text-gray-300 hover:text-white"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="font-semibold text-gray-300 hover:text-white"
          >
            Contact us
          </Link>
        </div>

        <div className=" text-nowrap">
          <p className="mb-2">Delivery Information</p>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">Terms & Condition</p>
          <p className="mb-2">Search Terms</p>
          <p>Order & Return</p>
        </div>

        <div className="text-center md:text-left ">
          <p className="mb-4">Newsletter</p>
          <div className="flex border-2 border-red-500 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Your Email"
              className="py-3 px-4 flex-1 outline-none text-white bg-black "
            />
            <button className="bg-red-500 text-white py-3 px-6 font-medium">
              Subscribe
            </button>
          </div>
          <div className="flex justify-start mt-5">
            {/* Add payment logos here */}
            <img src="/images/paypal.png" alt="PayPal" className="h-8" />
            <img
              src="/images/mastercard.png"
              alt="MasterCard"
              className="h-8 ml-4"
            />
            <img src="/images/visa.png" alt="Visa" className="h-8 ml-4" />
          </div>
          </div>
      </section>
    </footer>
  );
};

export default Footer;
