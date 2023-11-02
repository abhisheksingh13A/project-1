import Image from "next/image";

export default function About(){
    return(
        
            <div className="bg-red-500 pb-10 ">
                <h1 className=" text-3xl text-center text-semibold pt-10">About Us</h1>
                <div className="flex justify-center gap-10 my-10">
                   <div className="flex gap-2 bg-slate-300 rounded-2xl  px-5 py-3">
                 <div>
                 <h1>Any DAy offer</h1>
                    <h3>New fresh burger</h3>
                    <h1>$23.9</h1>
                 </div>
                    <Image src="/burger2.jpg" alt="1" width={100} height={100} className="rounded-full" />
                   </div>
                   <div className="flex gap-2 bg-slate-300 rounded-2xl px-5 py-3">
                 <div>
                 <h1>Any DAy offer</h1>
                    <h3>New fresh burger</h3>
                    <h1>$23.9</h1>
                 </div>
                    <Image src="/burger2.jpg" alt="1" width={100} height={100} className="rounded-full" />
                   </div>
                   <div className="flex gap-2 bg-slate-300 rounded-2xl px-5 py-3">
                 <div>
                 <h1>Any DAy offer</h1>
                    <h3>New fresh burger</h3>
                    <h1>$23.9</h1>
                 </div>
                    <Image src="/burger2.jpg" alt="1" width={100} height={100} className="rounded-full" />
                   </div>
                  
                </div>
                <div className="flex justify-center gap-5 my-10">
                   <div className="flex gap-2 bg-slate-300 rounded-2xl px-5 py-3">
                 <div>
                 <h1>Any DAy offer</h1>
                    <h3>New fresh burger</h3>
                    <h1>$23.9</h1>
                 </div>
                    <Image src="/burger2.jpg" alt="1" width={100} height={100} className="rounded-full" />
                   </div>
                   <div className="flex gap-2 bg-slate-300 rounded-2xl px-5 py-3">
                 <div>
                 <h1>Any DAy offer</h1>
                    <h3>New fresh burger</h3>
                    <h1>$23.9</h1>
                 </div>
                    <Image src="/burger2.jpg" alt="1" width={100} height={100} className="rounded-full" />
                   </div>
                   </div>
            </div>
        
    )
}