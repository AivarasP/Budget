import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import BackgroundImage from '../assets/images/bg.jpg'

 function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center"style={{
            userSelect: "none"
        }}>Pradėkite Taupyti!</h1>
            <h2 className=" text-center" style={
                {fontSize:30}

            }>Prisijunkite ir pradėkite taupyti pinigus!</h2>
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