import React from 'react'
import { BrowserRouter as Router, NavLink, useLocation, Routes, Route, Link } from 'react-router-dom';
import useIsActive from '../hooks/useIsActive';


function Sidebar() {


    const { isActive } = useIsActive();


    return (
        <>
            <div className="main-menu">
                {/*-- Brand Logo -*/}
                <div className="logo-box">
                    {/*-- Brand Logo Light -*/}
                    <a href="index.html" className="logo-light" >
                        <img src="assets/images/logo-light.png" alt="logo" className="logo-lg" height="22" />
                        <img src="assets/images/logo-sm.png" alt="small logo" className="logo-sm" height="22" />
                    </a>

                    {/*-- Brand Logo Dark -*/}
                    <a href="index.html" className="logo-dark" >
                        <img src="assets/images/logo-dark.png" alt="dark logo" className="logo-lg" height="22" />
                        <img src="assets/images/logo-sm.png" alt="small logo" className="logo-sm" height="22" />
                    </a>
                </div>

                {/*--- Menu -*/}
                <div data-simplebar>
                    <ul className="app-menu">

                        <li className="menu-title">Menu</li>

                        <li className={`menu-item ${isActive('/') ? 'active' : ''}`}>

                            <NavLink to="/" className="menu-link waves-effect" ><span className="menu-icon"><i className="bx bx-home-smile"></i></span>
                                <span className="menu-text"> Dashboards </span>
                                <span className="badge bg-primary rounded ms-auto">01</span></NavLink>


                        </li>

                        {/* <li className="menu-title">Custom</li> */}

                        <li className={`menu-item ${isActive('/complaint') ? 'active' : ''}`}>
                            <NavLink to='/complaint' className="menu-link waves-effect">
                                <span className="menu-icon"><i className="bx bx-file"></i></span>
                                <span className="menu-text"> Complaint </span>
                            </NavLink>
                        </li>








                        <li className="menu-title">User & Role Management</li>




                        <li className={`menu-item ${isActive('/OwnerForm') ? 'active' : ''}`}>
                            <NavLink to="/OwnerForm" className="menu-link waves-effect">
                                <span className="menu-icon"><i className="bx bx-id-card"></i></span>
                                <span className="menu-text"> Owner Form </span>
                            </NavLink>
                        </li>
                        <li className={`menu-item ${isActive('/AdminForm') ? 'active' : ''}`}>
                            <NavLink to="/AdminForm" className="menu-link waves-effect">
                                <span className="menu-icon"><i className="bx bx-shield-quarter"></i></span>
                                <span className="menu-text"> Admin Form </span>
                            </NavLink>
                        </li>
                        <li className={`menu-item ${isActive('/UserForm') ? 'active' : ''}`}>
                            <NavLink to="/UserForm" className="menu-link waves-effect">
                                <span className="menu-icon"><i className="bx bx-user-circle"></i></span>
                                <span className="menu-text"> User Form </span>
                            </NavLink>
                        </li>
                        <li className={`menu-item ${isActive('/ProjectManagerForm') ? 'active' : ''}`}>
                            <NavLink to="/ProjectManagerForm" className="menu-link waves-effect">
                                <span className="menu-icon"><i className="bx bx-briefcase-alt"></i></span>
                                <span className="menu-text"> Project Manager Form </span>
                            </NavLink>
                        </li>
                        <li className={`menu-item ${isActive('/TenantForm') ? 'active' : ''}`}>
                            <NavLink to="/TenantForm" className="menu-link waves-effect">
                                <span className="menu-icon"><i className="bx bx-home-alt"></i></span>
                                <span className="menu-text"> Tenant Form </span>
                            </NavLink>
                        </li>


             {/*    Property Form        */}
                <li className="menu-title">Property</li>
                    <li className={`menu-item ${isActive('/PropertyForm') ? 'active' : ''}`}>
                        <NavLink to="/PropertyForm" className="menu-link waves-effect">
                            <span className="menu-icon"><i className="bx bx-id-card"></i></span>
                            <span className="menu-text"> Property Form </span>
                        </NavLink>
                    </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
