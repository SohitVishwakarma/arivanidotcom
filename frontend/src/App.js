import React from 'react';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Head from './components/Head';
import CompanyNavbar from './components/Navbar';

function App() {
  return (
  <>
    <Head/>
    <CompanyNavbar/>

    <Routes>
         
        <Route path="/" element={<Home />} />
    </Routes>
  </>
  )
  
 
}

export default App;
