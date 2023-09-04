import './App.css';
import Header from './componentes/header';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import FistPage from './pages/FistPage';
import Form from './pages/Form';
import InGame from './pages/inGame';
import Instrucoes from './pages/Instrucoes';
import SobreODev from './pages/SobreODev';
import EditarItem from './pages/EditarItem';
import JogosComunidade from './pages/JogosComunidade';
import GameEspecifico from './pages/JogosComunidade/GameEspecifico';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<FistPage/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/ingame" element={<InGame/>}/>
          <Route path="/instrucoes" element={<Instrucoes/>}/>
          <Route path="/sobreodev" element={<SobreODev/>}/>
          <Route path="/itens/:id" element={<EditarItem/>}/>
          <Route path="/jogoscomunidade" element={<JogosComunidade/>}/>
          <Route path="jogoscomunidade/:id" element={<GameEspecifico/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
