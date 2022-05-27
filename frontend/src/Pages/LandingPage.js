import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import BackgroundImage from '../assets/images/gb.jpg'

 function LandingPage() {
    return (
        <header style={ HeaderStyle }>
      <div className='cssanimation sequence fadeInBottom'>
            <h1 className="main-title text-center"style={{
            userSelect: "none",
            opacity:0.6,
            color:'white'
        }}>Pradėkite Taupyti!</h1>
            <h2 className=" text-center" style={
                {fontSize:30, color:'white',opacity:0.6}
               

            }>Prisijunkite ir pradėkite taupyti pinigus!</h2>
            <div className="buttons text-center">
                <Link to="/register">
                    <button className="primary-buttons" id="btns"><span>Pradėti</span></button>
                </Link>
          </div>
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