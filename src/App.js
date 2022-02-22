import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, AboutUs, Boutique, Jewelry, Technology, ProductTechnology } from "./page";
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
            <Route path="technology" element={<Technology />} />         
            <Route path="technology/:productTechnologyid" element={<ProductTechnology />} />         
            <Route path="*" element={<Navigate replace to='/' />} /> 
          </Route>         
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
