import React from "react";

const LeftComponent: React.FC = () => {
  return (
    //conteneur principal
    <div className="relative w-full md:h-[650px] ">
      {/* Background et portrait dans le même div */}
      <div 
        className="w-full h-[90%] bg-center xl:bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/image/pictures/bgDesign.png')",
         
        }}
      >
        <img
          className="w-full h-full object-contain"
          src="/image/pictures/portraitDesign.png"
          alt="portrait"
        />
      </div>
    </div>
  );
};

export default LeftComponent;