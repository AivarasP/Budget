import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import BackgroundImage from '../assets/images/bp.jpg'

 function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center"></h1>
            <p className="main-para text-center">Prisijungite ir pradėkite taupyti pinigus!</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" id="btns"><span>Prisijungti</span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="btns"><span>Registruotis </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default LandingPage;