import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Header, AboutUs, Clothing, Jewelry, Tecnology } from "./page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/jewerly" element={<Jewelry />} />
          <Route path="/tecnology" element={<Tecnology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
