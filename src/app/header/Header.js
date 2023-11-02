import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="grid grid-cols-2 bg-black text-white py-10">
        <div className="text-3xl ml-11 mt-20  text-center">
          <h1>BARGAIN</h1>
          <h1>BUCKET MENU</h1>
          <h1 >CAMPAIGN</h1>
          <p className=" pt-10 px-11 text-red-500">KFC Turkey Website Redesign </p>
         <p className="text-sm pt-10 px-11">KFC Turkey Website Redesign designed by <span className="text-red-500">Abhishek singh</span> . Connect with them on Dribbble; the global community for designers and creative professionals.</p>
       
       <div className="mt-10">
        <button className="text-xl border border-white bg-red-600 rounded-3xl px-7 ">Order Now</button>
       </div>
        </div>
      <Image src="/burger3.jpg" alt="kfc" width={400} height={400} className=" w-[500px] h-[500px] rounded-full" />
        
      </div>
    </div>
  );
}
