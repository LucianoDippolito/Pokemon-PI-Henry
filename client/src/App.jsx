import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from "./components/LandingPage/LandingPage"
import Home from './components/Home/Home';
import PokemonCreate from './components/PokemonCreate/PokemonCreate'
import Detail from './components/Detail/Detail'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/pokemons" element={<PokemonCreate/>}/>
          <Route exact path="/home/:id" element={<Detail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
