import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 col-12" style={{ height: "180px", background: "orange" }}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" style={{ height: "180px" }}>
                            <div className="carousel-item active">
                                <img src="sbi.png" className="d-block w-100" alt="SBI" />
                            </div>
                            <div className="carousel-item">
                                <img src="sbi1.png" className="d-block w-100" alt="SBI 1" />
                            </div>
                            {/* Ensure there is a valid image source or remove this item */}
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-8 col-12" style={{ height: "180px", background: "cyan", color: "red" }}>
                    <center>
                        <h1>Online Banking Application</h1>
                        <hr />
                        <h3>Bank At Your Doorstep</h3>
                    </center>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Banking</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Balinq" activeClassName="active">Balinq</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Createac" activeClassName="active">Create Ac</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Dep" activeClassName="active">Deposit</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Wid" activeClassName="active">Withdraw</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact" activeClassName="active">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About" activeClassName="active">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Funds" activeClassName="active">Fund Transfer</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Pinchange" activeClassName="active">Pinchange</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
