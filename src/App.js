import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import About from './Component/About';
import Home from './Component/Home';
import Wid from './Component/Wid';
import Dep from './Component/Dep';
import Createac from './Component/Createac';
import Balinq from './Component/Balinq';
import AcSummary from './Component/AcSumry';
import Contact  from './Component/Contact';
import Funds from './Component/Funds';
import Pinchange from './Component/Pinchange';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/Wid' element={<Wid/>} />
        <Route path='/Dep' element={<Dep/>} />
        <Route path='/Createac' element={<Createac/>} />
        <Route path='/Balinq' element={<Balinq/>} />
        <Route path='/AcSumry' element={<AcSummary/>} />
        <Route path='/Wid' element={<Wid/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Funds' element={<Funds/>} />
        <Route path='/Pinchange' element={<Pinchange/>} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
