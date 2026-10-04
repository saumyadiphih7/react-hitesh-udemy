import { useState } from "react";


function App() {
  const [color,setColor] = useState("orange");

  const changeColor =(color)=>{
    setColor(color);
  }

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-amber-50 p-4 rounded shadow-lg">
        <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
         onClick ={()=>changeColor("blue")}>
          Blue
        </button>
        <button className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
         onClick ={()=>changeColor("green")}>
          Green
        </button>
        <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
         onClick ={()=>changeColor("red")}>
          Red
        </button>
      </div>
    </div>
  );
}

export default App;
