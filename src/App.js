import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, AboutUs, Boutique, Jewelry, Tecnology } from "./page";
import { Layout } from "./components";

function App() {
  return (
    <div className="App">
      <HashRouter>        
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="clothing" element={<Boutique />} />
            <Route path="jewerly" element={<Jewelry />} />
            <Route path="tecnology" element={<Tecnology />} />         
            <Route path="tecnology/:productTecnologyid" element={<Tecnology />} />         
            <Route path="*" element={<Navigate replace to='/' />} /> 
          </Route>         
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
