import React from 'react'

import logo from '../../assets/logo.png'
import './Header.css'

const header = () => {
  return (
    <div className='header flex'>
        <div className="header-container">
            <div className="header-info">
                <div className="header-info-container">
                    <img className='logo' src={logo} alt="" />
                </div>
            </div>
            <div className="header-navbar">
                <div className="header-navbar-container">
                    <nav>
                        <ul>
                            <li className='active'><a>Home</a></li>
                            <li><a>US</a></li>
                            <li><a>World</a></li>
                            <li><a>Politics</a></li>
                            <li><a>Business</a></li>
                            <li><a>More</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default header