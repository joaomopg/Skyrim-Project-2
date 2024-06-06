import './App.css';
import Contatos from './pages/contato/contatos';
import Home from './pages/home/home';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/Comentarios/comentarios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
