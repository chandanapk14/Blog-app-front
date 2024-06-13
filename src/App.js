import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;


