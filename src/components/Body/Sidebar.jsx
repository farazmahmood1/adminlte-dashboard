import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Youtube Viewer</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Host</a>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item current">
                                <Link to="/" className="nav-link">
                                    <i class="fa-solid fa-globe"></i>&nbsp;&nbsp;
                                    <p>Add your Url</p>
                                </Link>
                            </li>

                            <li className="nav-item current">
                                <Link to="/ViewProgress" className="nav-link">
                                    <i class="fa-solid fa-spinner"></i>&nbsp;&nbsp;
                                    <p>View Progress</p>
                                </Link>
                            </li>
{/* 
                            <li className="nav-item current">
                                <Link to="/Demo" className="nav-link">
                                    <i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;
                                    <p>Statistics</p>
                                </Link>
                            </li>

                            <li className="nav-item current">
                                <Link to="/Demo" className="nav-link">
                                    <i class="fa-solid fa-book"></i>&nbsp;&nbsp;
                                    <p>Records</p>
                                </Link>
                            </li>

                            <li className="nav-item current">
                                <Link to="/Demo" className="nav-link">
                                    <i class="fa-solid fa-clock-rotate-left"></i>&nbsp;&nbsp;
                                    <p>History</p>
                                </Link>
                            </li>

                            <li className="nav-item current">
                                <Link to="/Demo" className="nav-link">
                                    <i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;
                                    <p>Create users</p>
                                </Link>
                            </li>

                            <li className="nav-item current">
                                <Link to="/Demo" className="nav-link">
                                    <i class="fa-solid fa-people-roof"></i>&nbsp;&nbsp;
                                    <p>Manage Staff</p>
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    )
}

export default Sidebar