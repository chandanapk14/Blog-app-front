import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import New from './components/New';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/new' element={<New/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;


