"use client"
import Image from "next/image";
import react from "react"
import Typewriter from 'typewriter-effect';
import Link from "next/link";
const Hero=()=>{
    return(
        <div>
<section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
    I AM
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['WEB DEVELOPER', 'UI/UX DESIGHNER'],
    autoStart: true,
    loop: true,
  }}
/>
       
      </h1>
       <div className="w-[500px] h-[5px] bg-blue-500"></div>
      <p className="mb-8 leading-relaxed">
       
      Hi, Im MUBASHIR, a passionate 12th-grade student and aspiring web developer.
 Proficient in HTML, CSS, and TypeScript, I craft dynamic, responsive web experiences.
 Currently exploring Next.js and pushing boundaries in modern web design
      </p>
      <div className="flex justify-center gap-5 ">
        <Link href={"#Contact"}>
        <button className="ml-4 inline-flex text-black-500 bg-blue-300 border-1 py-2 px-6 hover:bg-purple-500 ">
         Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto ">
      <Image src="/images/logo.png" alt="portfolio" width={1200} height={600} className="w-[550px]"/>
      
    </div>
  </div>
</section>

        </div>
    )
}
export default Hero;