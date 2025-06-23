import { useState ,useEffect } from 'react'

//import  '../public/src/assets/scss/style.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Admin_dashboard from './layouts/Admin_dashboard';

function App() {


  return (

    <Router>

      <Admin_dashboard />



    </Router>


  )
}

export default App
