import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Header from './components/Header';
import AboutUs from './routes/AboutUs';
import Clothing from './page/Clothing';
import Jewerly from './page/Jewelry';
import Tecnology from './page/Tecnology';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/clothing" element={<Clothing />}/>
          <Route path="/jewerly" element={<Jewerly />}/>
          <Route path="/tecnology" element={<Tecnology />}/>
          

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
