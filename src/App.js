import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, AboutUs, Boutique, Jewelry, Tecnology } from "./page";
import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/clothing" element={<Boutique />} />
          <Route path="/jewerly" element={<Jewelry />} />
          <Route path="/tecnology" element={<Tecnology />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
