import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, AboutUs, Clothing, Jewelry, Tecnology } from "./page";
import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/jewerly" element={<Jewelry />} />
          <Route path="/tecnology" element={<Tecnology />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
