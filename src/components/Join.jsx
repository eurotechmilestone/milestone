import React from "react";

const Join = () => {
  return (
  
    <div>
      <div
      className=" relative"
      style={{
        backgroundImage: 'url("./image/joining-area.png")',
        backgroundSize: "cover",
        width: "100%",
        height: "440px",
      }}
    >
      <div className="absolute bg-[#00BBAE] inset-0 opacity-70 z-0"></div>
      <div className="absolute inset-0 flex justify-center items-center flex-col z-10 ">
        
        <div className="flex justify-center items-center flex-col text-white">
          <h1 className="baslik text-center text-5xl pb-5">
            Join Our New Session
          </h1>
          <p className="text-center">
            Kindedo believes that good questions drive good answers.
            <br /> Whether it's a query about the world around us or a
            challenge.
          </p>

          <div className="mt-8 ">
            <a
              href="about.html"
              className="text-[14px] bg-[#FF9B24] hover:bg-[#FFF] overflow-hidden block w-30 px-4 relative group xs:px-8 py-5 rounded-3xl text-white  hover:text-[#FF9B24] duration-900 "
            >
              <span className="absolute left-6 bottom-2.5 group-hover: group-hover:left-6 group-hover:bottom-9 duration-500 ">
                Apply Now 
              </span>
              <span className="opacity-0 absolute left-6 -bottom-3  group-hover:-translate-y-6   group-hover:opacity-100 duration-500">
              Apply Now
              </span>
            </a>
           
          </div>
 {/* <div class="h-2  bg-amber-500 mt-60 w-96"></div> */}
         
        </div>
        
      </div>
      
    </div>
    
    </div>

   

    
  );
};

export default Join;
