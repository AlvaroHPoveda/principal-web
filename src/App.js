import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Header from './components/Header';
import AboutUs from './routes/AboutUs';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutus" element={<AboutUs />}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
