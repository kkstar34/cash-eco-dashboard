import React from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './../context/UserAuthContextProvider';

function Nav() {

    const navigate = useNavigate();
    const {logOut} = useUserAuth();
    const handleLogout = async(e) =>

  {
    e.preventDefault();

    try {
      await logOut();
      navigate('/');
    }catch(e) {

    }

  }
   
  return (
    <nav>
    <div className="container-fluid">
        <div className="navigation">
            <div className="logoBox">
                <img src="icones/Rec.png" alt="logo"/>
            </div>

            <div className="user--box">
                <ul>
                    <li >
                        <div className="notif">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0201 2.91016C8.71009 2.91016 6.02009 5.60016 6.02009 8.91016V11.8002C6.02009 12.4102 5.76009 13.3402 5.45009 13.8602L4.30009 15.7702C3.59009 16.9502 4.08009 18.2602 5.38009 18.7002C9.69009 20.1402 14.3401 20.1402 18.6501 18.7002C19.8601 18.3002 20.3901 16.8702 19.7301 15.7702L18.5801 13.8602C18.2801 13.3402 18.0201 12.4102 18.0201 11.8002V8.91016C18.0201 5.61016 15.3201 2.91016 12.0201 2.91016Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                <path d="M13.8699 3.19945C13.5599 3.10945 13.2399 3.03945 12.9099 2.99945C11.9499 2.87945 11.0299 2.94945 10.1699 3.19945C10.4599 2.45945 11.1799 1.93945 12.0199 1.93945C12.8599 1.93945 13.5799 2.45945 13.8699 3.19945Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.02 19.0605C15.02 20.7105 13.67 22.0605 12.02 22.0605C11.2 22.0605 10.44 21.7205 9.90002 21.1805C9.36002 20.6405 9.02002 19.8805 9.02002 19.0605" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
                            </svg>

                            <div className="point"></div>
                        </div>
                        <div className="notif--content">
                            <ul>
                                <a href="#empty">
                                    <li>Notifications1</li>
                                </a>
                                <a href="#empty">
                                    <li>Notifications1</li>
                                </a>
                                <a href="#empty">
                                    <li>Notifications1</li>
                                </a>
                            </ul>
                        </div>
                    </li>
                     <li>
                        <div className="user--box__card">
                            <div className="user--box__card--profil">
                                <img src="icones/Rec1.png" alt="Profil" /> &nbsp;
                                <span>Salut Cash eco </span>&nbsp;
                                <i className="fas fa-caret-down"></i>
                            </div>

                            <div className="user--box__card--info">
                               <ul>
                                   <a href="#empty">
                                       <li  >Profil</li>
                                       
                                   </a>

                                   <a href="#empty">
                                       <li onClick={handleLogout} >Deconnexion</li>
                                       
                                   </a>
                               </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Nav