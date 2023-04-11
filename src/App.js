import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Navbar from './components/Navbar';
import RegisterUser from './components/pages/RegisterUser';
import AddContact from './components/pages/AddContact';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/registerUser" element={<RegisterUser />} />
          <Route path="/loginUser" element={<Login />} />
          <Route path="/addContact" element={<AddContact />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
