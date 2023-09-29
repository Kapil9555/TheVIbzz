
import './App.css';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import React from 'react'
import HomePage from './HomePage';

const App = () => {
  return (
    <Router basename="/repository-name">
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
        </Routes>
    </Router>
  )
}

export default App