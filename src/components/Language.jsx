import React from "react";

const Language = ({icon,title})=>{
    return(
      <div className="text-red-500/80 p-2 lg:p-4 bg-white/5 rounded-md flex flex-col items-center justify-center ">
        {<img className=" w-10 lg:w-12" src={icon} alt="" />}
        <h5 className="text-sm lg:text-md font-medium mt-2">{title}</h5>
      </div>
    )
}
export default Language;