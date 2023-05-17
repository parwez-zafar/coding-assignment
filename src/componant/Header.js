import React from 'react'
import { Link } from "react-router-dom";
import logo from '../image/EDYODA.png'
import './Header.css'
import vector from '../image/Vector.png'
import search from '../image/Search.png'

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <Link className="navbar-brand" to="#">
                    <img className="logo" src={logo} alt="Logo" />
                </Link>


                <div className="navbar-item">
                    <ul className="navbar-ul">
                        <li className="navli">
                            Courses <span><img className="vector" src={vector} alt="vector" /></span>
                        </li>
                        <li className="navli">
                            Program <span><img className="vector" src={vector} alt="vector" /></span>
                        </li>
                    </ul>

                    <ul>
                        <li className="navli">
                            Log in
                        </li>
                        <li className="navli">
                            <img className="vector" src={search} alt="vector" />
                        </li>
                        <li className="navli">
                            <button className='btn'>JOIN NOW</button>
                        </li>
                    </ul>


                </div>
            </nav >
        </>
    )
}

export default Header;