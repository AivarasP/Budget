import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import BackgroundImage from '../assets/images/bgw.jpg'

 function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <nav className="navbarlanding">
        <div className="navbar-nav mr-auto">
          <h1 id="btnnavs"style={{userSelect:'none'}}>Pinigu <span style={{color:'#AAFF00'}}>Medis</span></h1>
        </div>
          <Link to="/aboutus">
            <button id="btnnavlan">
              APIE MUS
            </button>
            </Link>
            <Link to="/contacts">
            <button id="btnnavlan">
              KONTAKTAI
            </button>
            </Link>
            <Link to="/login">
            <button  id="btnnavlan">
              PRISIJUNGTI
            </button>
            </Link>
            
            <div className="navbar-nav ml-auto">
            
            <Link to="/register">
            <button id="btnnavlan">
              REGISTRACIJA
            </button>
            </Link>  
          </div>
      </nav>
            <h1 className="main-title text-center"style={{
            userSelect: "none",
            opacity:0.8
        }}>Pradėkite Taupyti!</h1>
            <h2 className=" text-center" style={
                {fontSize:30}

            }>Prisijunkite ir pradėkite taupyti pinigus!</h2>
            <div className="buttons text-center">
                <Link to="/register">
                    <button className="primary-buttons" id="btns"><span>Pradėti</span></button>
                </Link>
            </div>
        </header>
        
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    position:"absolute",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default LandingPage;