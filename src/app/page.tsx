import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-main_bg">
      <section className="container flex py-10">
        <div className="w-1/2 flex items-center">
          <div>
            <span className="font-medium text-text_color mb-2">
              Sweet fun, full of milk.
            </span>
            <h1 className="text-5xl leading-tight mb-9">
              Feel inside cold with our delicious{" "}
              <span className="text-btn_color">ice-cream.</span>
            </h1>
            <p className="text-text_color text-lg mb-10">
              Some food has looked so awful that it's looked like something that
              the dog's brought home, yet after one mouthful I've been left
              eating my thoughts, my words.
            </p>
            <button className="bg-btn_color text-white py-[14px] px-[50px] rounded-md font-bold text-[16px] border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src="/images/home.png" alt="Delicious ice-cream" />
        </div>
      </section>
    </div>
  );
}
