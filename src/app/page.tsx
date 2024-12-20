import Header from "./components/Header";
import SplitScreen from "./components/SplitScreen";











export default function Home() {
  return (
    <div >
      <Header></Header>
      <div className=" right-5 text-right font-mono" style={{ fontFamily: "'Courier New', monospace" }}>
          <h1 className="text-white text-base sm:text-3xl lg:text-5xl">
            {"<h1>"}Romain Mornet{"</h1>"}
          </h1>   
      </div>
      <SplitScreen></SplitScreen>
   
      
      

    
    </div>
     

  );
}
