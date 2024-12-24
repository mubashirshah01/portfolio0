
import React from "react";

import { FaFacebook , FaLinkedin} from "react-icons/fa";

const Footer =()=>{
    return(
      <div className="bg-blue-400">
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
   
     
      <span className="ml-3 text-xl">PORTFOLIO</span>
  
    <div className="text-2xl text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 flex items-center space-x-5 text-[50px] "> © 2024 portfolio —  
    
    <FaFacebook className="text-4xl hover:text-[#6666fa]" />   
    <FaLinkedin className="text-2xl hover:text-[#5252fc]" />
    </div>
    
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
       
      </a>
      <a className="ml-3 text-gray-500">
       
      </a>
      <a className="ml-3 text-gray-500">
        
      </a>
      <a className="ml-3 text-gray-500">
        
      </a>
    </span>
  </div>
  
</footer>
</div>
    )

    
}
export default Footer;