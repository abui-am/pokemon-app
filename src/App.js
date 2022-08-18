import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:pokeId' element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
