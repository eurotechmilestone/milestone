import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';



const Join = () => {
  const [joinData, setJoinData] = useState([])
  const getJoin=async()=>{
    const url="https://fuatmercan.com/kids/api/v1/page.php?slug=index&lang=en&token=frpQ8/CDUfTsNoUUkbL0121PkOOjWJ1eDOfkQd3lWz3n/ZY/zu28pvFTW34u7M8CTKAdaQeWkT42n1rMsw==588cb53f476e2e13cde27315433d124c"
    try {
    const{data}= await axios(url)

    const datas =data.filter((item,index)=>item.modulName === 'component3')
    const {data:joinNewData} = datas[0]

 // component 3 deki bilgileri filitreleyerek cekmek icin yazilan fonsiyon yaziyoruz asagiya
    setJoinData(joinNewData)

   

      console.log(datas[0]);

    } catch (error) {
    console.log(error);
    }
    
    }
    
    useEffect(()=>{
    getJoin()
    },[])
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
            { joinData.title1}
          </h1>
          <p className="text-center">
          { joinData.content1}
          </p>

          <div className="mt-8 ">
            <a>
              href="about.html"
              className="text-[14px] bg-[#FF9B24] hover:bg-[#FFF] overflow-hidden block w-30 px-4 relative group xs:px-8 py-5 rounded-3xl text-white  hover:text-[#FF9B24] duration-900 "
            
              <span className="absolute left-6 bottom-2.5 group-hover: group-hover:left-6 group-hover:bottom-9 duration-500 ">
                Apply Now 
              </span>
             
            </a>
           
          </div>

         
        </div>
        
      </div>
      
    </div>
    
    </div>

   

    
  );
};

export default Join;
