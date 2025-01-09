"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `font-semibold ${pathname === path ? "text-red-500" : "text-text_color"}`;

  return (
    <header id="header" className="w-full h-[79px] bg-main_bg">
      <nav className="container flex h-full justify-between items-center">
        <div>
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="mx-auto md:mx-0"
            />
          </Link>
        </div>
        <div className="flex gap-10">
          <Link href="/" className={linkClasses("/")}>
            <span>Home</span>
          </Link>
          <Link href="/product" className={linkClasses("/product")}>
            <span>Product</span>
          </Link>
          <Link href="/pricing" className={linkClasses("/pricing")}>
            <span>Pricing</span>
          </Link>
          <Link href="/testimonials" className={linkClasses("/testimonials")}>
            <span>Testimonials</span>
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            <span>Contact us</span>
          </Link>
        </div>
        <div>
          <button className="bg-btn_color text-white py-[14px] px-[50px] rounded-md font-bold text-[16px] border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500">
            Buy Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
