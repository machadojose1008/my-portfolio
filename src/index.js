import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/contact/contact';
import NavigationBar from './components/nav-bar/nav-bar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
      <Route path='/' element={<NavigationBar />} >
        <Route path='/' element={<App />} />
        <Route path='/contact' element={<Contact />} />
      </Route>

    </Routes>
  </Router>


);

