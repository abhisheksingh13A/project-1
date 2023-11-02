import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-yellow-400 h-[230px]  border border-black">
      <div className="grid grid-cols-2">
        <div className="flex ml-60 mt-[-30px] ">
          <Image src="/kfc.jpg" alt="kfc" width={200} height={200} />
         
        </div>
        <div className="text-4xl text-center text-red-600 font-bold pt-8 mr-60">
          <h1>Now With Your Favorite</h1>
          <h1>KFC Mobile Application</h1>
          <h1>In your pocket</h1>
          <div className="flex gap-8 text-xl text-white  mt-5 pl-11">
            <button className="bg-black px-5 py-2 rounded-3xl">App store</button>
            <button className="bg-black px-5 py-2 rounded-3xl">Play Store</button>
          </div>
        </div>
      </div>
    </div>
  );
}
