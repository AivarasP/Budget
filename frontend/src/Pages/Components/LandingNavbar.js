import React from 'react'
import { Link as Link2}  from 'react-router-dom';
import './LandingNavbar.css'
import {Link} from 'react-scroll'
function LandingPage() {


    return( 
        <header name="top">
             <nav className="navbarlanding">
        <div className="navbar-nav mr-auto">
            <Link2 to="/">
          <h1 id="btnnavs"style={{userSelect:'none',color:'white'}}>Pinigu <span style={{color:'#5AFF3D'}}>Medis</span></h1>
        </Link2>
        </div>
          <Link2 to="/aboutus">
            
            </Link2>
            <Link activeClass="active" to="aboutus" spy={true} smooth={true} duration={750}>
            <button id="btnnavlan">
              APIE MUS
            </button>
                    </Link>
            <Link activeClass="active" to="contacts" spy={true} smooth={true} duration={750}>
            <button id="btnnavlan">
              KONTAKTAI
            </button>
                    </Link>
            <Link2 to="/login">
            <button  id="btnnavlan">
              PRISIJUNGTI
            </button>
            </Link2>
            
            <div className="navbar-nav ml-auto">
            
            <Link2 to="/register">
            <button id="btnnavlan">
              REGISTRACIJA
            </button>
            </Link2>  
          </div>
      </nav>
      </header>
      )
    }
export default LandingPage;