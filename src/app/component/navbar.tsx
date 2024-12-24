
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { IoMdDownload } from "react-icons/io";



const  Navbar = ()=>{
    return( 
      <div className="sticky top-0">  
              <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        <Image src="/images/logo.png" alt="portfolio" width={1200} height={600} className="w-[50px]"/>
            
            <span className="ml-3 text-xl">MY PORTFOLIO</span>
         
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
            < Link href={"#"} className="mr-5 hover:text-gray-900">about</Link>
            <Link href={"#Skills"} className="mr-5 hover:text-gray-900">skills</Link>
            <Link href={"#"} className="mr-5 hover:text-gray-900">projects</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-black-500 hover:text-indigo-400 rounded text-base mt-4 md:mt-0">Download CV
            <IoMdDownload className="text lg ml-2"/>
            
          </button>
        </div>
      </header>
      </div>

    )
}
export default  Navbar;