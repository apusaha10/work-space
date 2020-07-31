import React from 'react'
import profile from './assets/images/profile-pic.jpg'
import {fontawesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Content from './Content';
//import Backend from './Admin';


export default function Footer() {
    return (
<div className="wrapper">
  <nav id="sidebar" className="nav-sidebar">
    <div className="profile">
      <img className="img-circle" src= { profile } width={70} alt="profile" />
      <h5>Shumon Mahamud</h5>
      <h6>Adminstator</h6>
      <ul>
        <li><a href="#"><FontAwesomeIcon icon ="user"/></a></li>
        <li><a href="#"><FontAwesomeIcon icon ="home"/></a></li>
        <li><a href="#"><FontAwesomeIcon icon={"sign-out-alt"} /></a></li>
      </ul>
    </div>
    <div className="nav-heading">
      <h5>Navigations</h5>
    </div>
    <div className="sidebar-menu">
      <ul>
        <li className="sidebar-dropdown active">
          <a href="javascript:;">
            <FontAwesomeIcon icon ="tachometer-alt" />
            <span>Dashboard</span>
          </a>
          <div className="sidebar-submenu">
            <ul>
              <li className="active">
                <a href="index.html">Dashboard 1
                </a>
              </li>
              <li>
                <a href="#">Dashboard 2</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="sidebar-dropdown">
          <a href="#">
            <FontAwesomeIcon icon ="table" />
            <span>Layouts</span>
          </a>
          <div className="sidebar-submenu">
            <ul>
              <li>
                <a href="#">Dashboard 1
                </a>
              </li>
              <li>
                <a href="#">Dashboard 2</a>
              </li>
              <li>
                <a href="#">Dashboard 3</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="sidebar-dropdown">
          <a href="#">
            <FontAwesomeIcon icon ="envelope" />
            <span>Mail</span>
          </a>
          <div className="sidebar-submenu">
            <ul>
              <li>
                <a href="#">Inbox</a>
              </li>
              <li>
                <a href="#">Read Mail</a>
              </li>
              <li>
                <a href="#">Send</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="shopping-cart" />
            <span>Ecommerce</span>
          </a>
        </li>
        <div className="nav-heading">
          <h5>Apps</h5>
        </div>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="calendar-alt" />
            <span>Calender</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="comment-alt" />
            <span>Messenger</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="id-card" />
            <span>Contact</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="clipboard-list" />
            <span>To-Do</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="newspaper" />
            <span>News Feed</span>
          </a>
        </li>
        <div className="nav-heading">
          <h5>Ui - Elements</h5>
        </div>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="map-marker-alt"/>
            <span>Maps</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="cogs"/>
            <span>Widgets</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="chart-bar"/>
            <span>Chart</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="compress-arrows-alt"/>
            <span>Elements</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="th" />
            <span>Table</span>
          </a>
        </li>
        <div className="nav-heading">
          <h5>Pages</h5>
        </div>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="file-invoice"/>
            <span>Invoice</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="user"/>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="times"/>
            <span>Error Page</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="check-circle"/>
            <span>Coming soon</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="level-up-alt" />
            <span>Sign Up</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon ="sign-in-alt" />
            <span>Log In</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container-fluid">
    <div className="header-top shadow-sm m-t-15">
      <p>Dashboard</p>
      <p>Home / <span>Dashboard 1</span></p>
    </div>
    <div className="header-bottom">
      <div className="row">
        <div className="col-md-9">
          <div className="left-side">
            <p><span><i className="fas fa-envelope-open-text" /></span></p>
            <p>If you want to get all update always please subscribe our newsletter</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="right-side">
            <ul>
              <li><a href="#">Subscribe</a></li>
              <li><a href="#">Skip</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
     <Content />
  </div>
</div>

    )
}
