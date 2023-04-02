import Shell from "./components/Shell"
import './App.css';

function App() {  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="border border-gray-700 rounded-lg max-w-4xl w-full px-8 py-6 h-[30rem] max-h-[80vh]">
        <div className="text-green-500 font-bold mb-4 flex justify-between">
          <div>LomBash V1.0</div> <div> <a href="">Proyect</a> <a href="">Docs</a> </div> 
        </div>
        <div className="mb-2">
        <div></div>
        <Shell />  
        </div>
      </div>
    </div>
  );
}

export default App;
