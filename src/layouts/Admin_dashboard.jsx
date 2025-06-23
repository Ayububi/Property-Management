import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//mport './App.css'
import Dashboard from '../pages/Dashboard';
import Complaint from '../pages/Complain/Complaint';
import Complaint_form from '../pages/Complain/ComplaintForm';
import Sidebar_menu from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import UserForm from "../pages/User&RoleManagement/UserForm";
import AdminForm from "../pages/User&RoleManagement/AdminForm";
import ProjectManagerForm from "../pages/User&RoleManagement/ProjectManagerForm";
import TenantForm from "../pages/User&RoleManagement/TenantForm";
import OwnerForm from "../pages/User&RoleManagement/OwnerForm";
import PropertyForm from "../pages/Property/PropertyForm";
import Testing from "../pages/Testing";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tittle from '../components/Tittle';
import { useLocation } from 'react-router-dom';


function Admin_dashboard() {

 const location = useLocation();
  const path = location.pathname.replace("/", "") || "Dashboard";
    return (
        <>
            {/*-- Begin page -*/}
            <div className="layout-wrapper">

                {/*-- ========== Left Sidebar ========== -*/}



                <Sidebar_menu />

                {/*-- ============================================================== -*/}
                {/*-- Start Page Content here -*/}
                {/*-- ============================================================== -*/}

                <div className="page-content">

                    <Header  />
                                                {/*-- ========== Topbar End ========== -*/}

      <div className="px-3">

        {/*-- Start Content-*/}
        <div className="container-fluid">

          {/*-- start page title -*/}
          <Tittle title={path}/>
          {/*-- end page title -*/}
                    <Routes>
  
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/Complaint' element={<Complaint />} />
                        <Route path='/ComplaintForm' element={<Complaint_form />} />
                        <Route path="/UserForm" element={<UserForm />} />
                        <Route path="/AdminForm" element={<AdminForm />} />
                        <Route path="/ProjectManagerForm" element={<ProjectManagerForm />} />
                        <Route path="/TenantForm" element={<TenantForm />} />
                        <Route path="/OwnerForm" element={<OwnerForm />} />
                        <Route path="/PropertyForm" element={<PropertyForm />} />
                        <Route path="/Testing" element={<Testing />} />
                        

                    </Routes>
        </div> {/*-- container -*/}

      </div> {/*-- content -*/}
                    <Footer />

                </div>

                {/*-- ============================================================== -*/}
                {/*-- End Page content -*/}
                {/*-- ============================================================== -*/}

            </div>
            {/*-- END wrapper -*/}
        </>
    )
}

export default Admin_dashboard
