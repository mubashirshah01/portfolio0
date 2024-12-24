
import Image from "next/image";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Skills from "./component/skill";



export default function Home() {
  return (
    <div id="/">    
      <Hero/>
      <Contact/>
      <Skills/>
    </div>

      

  );
}

