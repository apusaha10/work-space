import React from 'react'
import logo from './assets/images/logo.png';
import userImage from './assets/images/profile-pic.jpg';
import {fontawesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    return (

           <section className="header">
  <header className="main-navbar-header">
    <nav className="navbar navbar-expand-md navbar-dark theme-color shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src= {logo } width={110} alt="logo" /></a>
        <div className="menu-toggle-button m-t-5">
          <a className="nav-link wave-effect" href="#" id="sidebarCollapse">
          <FontAwesomeIcon icon="bars" />
            
          </a>
        </div>
        <ul className="navbar-nav ml-auto navbar-top-links">
          <li className="dropdown m-t-5">
            <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
            <FontAwesomeIcon icon="envelope" />
              <span className="badge notification shadow-sm messege" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              sumon
            </ul>
          </li>
          <li className="dropdown m-t-5">
            <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
              <FontAwesomeIcon icon = "bell" />
              <span className="badge notification shadow-sm" />
            </a>
            <ul className="dropdown-menu dropdown-user">
            </ul>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
              <img src={userImage} alt="userImage" width={30} className="img-circle" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <div className="dw-user-box text-center">
                  <div className="u-text">
                    <p className="text-muted">user@mail.com</p>
                    <a href="profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                  </div>
                </div>
              </li>
              <div className="dropdown-divider" />
              <li>
                <a href="#"><i className="ti-user" /> My Profile</a>
              </li>
              <li>
                <a href="#"><i className="ti-wallet" /> My Balance</a>
              </li>
              <li>
                <a href="#"><i className="ti-email" /> Inbox</a>
              </li>
              <div className="dropdown-divider" />
              <li>
                <a href="#"><i className="ti-settings" /> Account Setting</a>
              </li>
              <div className="dropdown-divider" />
              <li>
                <a href="#"><i className="fa fa-power-off" /> Logout</a>
              </li>
            </ul>
          </li>
          <li className="dropdown m-t-5">
            <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
              <FontAwesomeIcon icon ="cog" />
            </a>
            <ul className="dropdown-menu dropdown-user">
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</section>


    )
}

