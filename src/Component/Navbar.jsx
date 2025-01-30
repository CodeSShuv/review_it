import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"
import logo from '../img/byaparhub.com-min.png'
const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid nav-flex justify-content-between">
                    <Link className="navbar-brand" to="/review_it">
                    <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/">Help</a>
                            <a className="nav-link" href="/">FAQ</a>
                            <Link className="btn btn-success"to="/pricing">Pricing</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar