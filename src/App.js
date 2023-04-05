import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Shell from "./components/Shell";
import Docs from "./components/Docs";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen h-full bg-gray-900 text-white flex items-center justify-center">
        <div className="border border-gray-700 rounded-lg max-w-4xl w-full px-8 py-6 h-[80vh] max-h-[80vh] my-10  ">
          <div className="text-green-500 font-bold mb-6 flex justify-between">
            <Link to="/">LomBash V1.0</Link> 
            <div>
              <a href="https://github.com/SantiagoLombardi/portfolio-bash" target='_blank' rel="noreferrer">Proyect</a> 
              <Link className='ml-2' to="/Documentation">Docs</Link> 
              </div>
          </div>
          <Routes>
            <Route path="/" element={<Shell/>} />
            <Route path="/Documentation" element={<Docs/>} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
