import React from 'react'
import { Link } from 'react-router-dom';
import { AsyncStorage } from 'AsyncStorage';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()

    const logOut = async () => {
        AsyncStorage.setItem('logIN', JSON.stringify(false));
        let login = await AsyncStorage.getItem("logIN")
        let _login = JSON.parse(login)
        if (_login === false) {
            navigate('/')

            setInterval(() => {
                window.location.reload()
            }, 2000);
        }
    }
  return (
    <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
      {/* <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Contact</a>
      </li> */}
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      {/* Navbar Search */}
      <li className="nav-item">
        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
          <i className="fas fa-search" />
        </a>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      {/* Messages Dropdown Menu */}
      <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa-solid fa-gears" />
                            {/* <span className="badge badge-warning navbar-badge">2</span> */}
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">

                            {/* <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2" />Account Setting
                            </a> */}
                            <div className="dropdown-divider" />
                            {/* <a className="dropdown-item" onClick={logOut}>
                                <i className="fas fa-users mr-2" /> Switch User
                            </a> */}
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" onClick={logOut} style={{cursor:"pointer"}}>
                                <i className="fa-solid fa-user mr-2" /> Logout
                            </a>
                            <div className="dropdown-divider" />
                            {/* <a href="#" className="dropdown-item dropdown-footer">See All setting</a> */}
                        </div>
                    </li>
      {/* Notifications Dropdown Menu */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-header">15 Notifications</span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2" /> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i className="fas fa-th-large" />
        </a>
      </li>
    </ul>
  </nav>
    </div>
  )
}

export default Navbar