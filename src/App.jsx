import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Jogos from './Pages/JogosEscolhido/Jogos';
import Categorias from './Pages/Categorias/Categorias';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/VHub_Games/"
          element={<Home />}
        />

        <Route
          path="/VHub_Games/:jogosId"
          element={<Jogos />}
        />

        <Route
          path="/VHub_Games/categoria/:categoria"
          element={<Categorias />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;