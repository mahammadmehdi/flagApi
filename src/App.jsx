import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Home from './Page/Home';
import Detail from "./Page/Detail";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home></Home>} /> 
        <Route path="/detail/name/:name" element={<Detail></Detail>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
