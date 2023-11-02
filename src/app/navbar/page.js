import Image from "next/image";
import Link from "next/link";
import {IoMdContact} from "react-icons/io"
export default function Navbar(){
    return(
        <div className="bg-red-600 text-white">
            <nav className="flex justify-between px-16 ">
                <h1 className="text-6xl font-extrabold italic">KFC</h1>
                <div className=" flex gap-4 items-center">
                    <Link href="/" >Home</Link>
                    <Link href="/about" >About Us</Link>
                    <Link href="/services" >Services</Link>
                    <IoMdContact />
                    <IoMdContact />
                </div>
            </nav>
        </div>
    )
}