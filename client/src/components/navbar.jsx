import React from "react"
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <nav id="code" className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" id="toogle-button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#myNavbar">
                        <span className="glyphicon glyphicon-menu-hamburger"> </span>
                    </button>
                    <Link id="logo" className="navbar-brand" to="/">StreetFoodMania</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">

                    <ul id="link" className="nav navbar-nav navbar-right">
                        <li className="dropdown" id="first-link">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to="#">More <span
                                className="caret"> </span></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/stalls">Stall List</Link></li>
                                <li><Link to="#">Page 1-2</Link></li>
                                <li><Link to="#">Page 1-3</Link></li>
                            </ul>
                        </li>
                        <li><Link to='#'>Sign In</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar