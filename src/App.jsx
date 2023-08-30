import './App.css';
import Header from './componentes/header';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import FistPage from './pages/FistPage';
import Form from './pages/Form';
import InGame from './pages/inGame';


function App() {

  var reload = 1

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<FistPage/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path={`/ingame/:${reload}`} element={<InGame reload={reload}/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
