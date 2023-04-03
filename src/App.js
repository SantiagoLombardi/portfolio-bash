import Shell from "./components/Shell";
import './App.css';
import { Route, Router } from "react-router-dom";

function App() {  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="border border-gray-700 rounded-lg max-w-4xl w-full px-8 py-6 h-[30rem] max-h-[80vh]">
        <div className="text-green-500 font-bold mb-6 flex justify-between">
          <div>LomBash V1.0</div> <div> <a href="https://github.com/SantiagoLombardi/portfolio-bash" target='_blank'>Proyect</a> <a href="https://github.com/SantiagoLombardi/portfolio-bash/blob/main/Documentation.md#lombash-v10-technical-documentation" target='_blank'>Docs</a> </div> 
        </div>
        <Shell/>
      </div>
    </div>
  );
}

export default App;
