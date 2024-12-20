const ImageDesign = () => {
  return (
    <>
      {/* Conteneur principal */}
      <div
        className="relative h-[30vh] sm:h-[50vh] lg:h-[65vh] xl:h-[75vh] min-h-[200px] w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/image/pictures/bgDesign2.svg')",
        }}
      >
        {/* Dégradé en haut */}
        <div
          className="absolute top-0 left-0 w-full h-8 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #0F0E12, transparent)",
            zIndex: 30,
          }}
        ></div>

        {/* Contenu principal */}
        <div className="flex justify-center items-center h-full relative z-20">
          <img
            className="max-h-full max-w-full object-contain block"
            src="/image/pictures/portraitDesign.png"
            alt="portrait"
          />
        </div>

        {/* Dégradé en bas */}
        <div
          className="absolute bottom-0 left-0 w-full h-8 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0F0E12, transparent)",
            zIndex: 30,
          }}
        ></div>

        <div>
          <h2 className="text-white absolute top-3 sm:top-5 font-playball text-2xl sm:text-3xl lg:text-5xl">Designer</h2>
          <h2 className="text-white absolute top-10 sm:top-14 lg:top-20 xl:top-[85px] left-4 lg:left-10 font-playball text-xl sm:text-2xl lg:text-4xl">UI/UX</h2>
          <img className="w-16 sm:w-20 lg:w-32 absolute top-16 sm:top-[90px] lg:top-32" src="/image/pictures/hand.svg" alt="portrait"
          />
          
        </div>
      </div>
    </>
  );
};

export default ImageDesign;