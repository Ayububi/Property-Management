import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//mport './App.css'
import Dashboard from './pages/Dashboard';
import Complaint from './pages/Complain/Complaint';
import Complaint_form from './pages/Complain/ComplaintForm';
import Sidebar_menu from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";

import UserForm from "./pages/User&RoleManagement/UserForm";
import AdminForm from "./pages/User&RoleManagement/AdminForm";
import ProjectManagerForm from "./pages/User&RoleManagement/ProjectManagerForm";
import TenantForm from "./pages/User&RoleManagement/TenantForm";
import OwnerForm from "./pages/User&RoleManagement/OwnerForm";
import PropertyForm from "./pages/Property/PropertyForm";
import Testing from "./pages/Testing";




//import  '../public/src/assets/scss/style.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const toggleSidebar = () => {
    document.documentElement.classList.toggle('sidebar-enable');
  };



  const toggleScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };


  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
  };


  const [count, setCount] = useState(0)

  return (

    <Router>






      {/*-- Begin page -*/}
      <div className="layout-wrapper">

        {/*-- ========== Left Sidebar ========== -*/}



        <Sidebar_menu />

        {/*-- ============================================================== -*/}
        {/*-- Start Page Content here -*/}
        {/*-- ============================================================== -*/}

        <div className="page-content">

       <Header toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} toggleScreen={toggleScreen} />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/complaint' element={<Complaint />} />
            <Route path='/ComplaintForm' element={<Complaint_form />} />
            <Route path="/UserForm" element={<UserForm />} />
            <Route path="/AdminForm" element={<AdminForm />} />
            <Route path="/ProjectManagerForm" element={<ProjectManagerForm />} />
            <Route path="/TenantForm" element={<TenantForm />} />
            <Route path="/OwnerForm" element={<OwnerForm />} />
            <Route path="/PropertyForm" element={<PropertyForm />} />
            <Route path="/Testing" element={<Testing />} />
          </Routes>
         
         <Footer/>

        </div>

        {/*-- ============================================================== -*/}
        {/*-- End Page content -*/}
        {/*-- ============================================================== -*/}

      </div>
      {/*-- END wrapper -*/}

    </Router>






  )
}

export default App
