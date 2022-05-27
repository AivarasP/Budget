import React from 'react'
import { Link }  from 'react-router-dom';
import './LandingNavbar.css'

function LogNavbar() {


    return( 
        <header>
             <nav className="navbarlanding">
        <div className="navbar-nav mr-auto">
            <Link to="/">
          <h1 id="btnnavs"style={{userSelect:'none',color:'white'}}>Pinigu <span style={{color:'#5AFF3D'}}>Medis</span></h1>
        </Link>
        </div>
            <Link to="/">
            <button id="btnnavlan">
              PRADŽIA
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
      </header>
      )
    }
export default LogNavbar;