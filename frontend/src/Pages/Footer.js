import React from 'react'
import{BsFillArrowUpCircleFill} from 'react-icons/bs'
import './Footer.css'
import {Link} from 'react-scroll';
import {Link as Link2} from 'react-router-dom';
const Footer = () =>{
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="logo-footer">Pinigu <span style={{color:'#5AFF3D'}}>Medis</span></div>
                    
                </div>
                
                <div className="col-container">
                    <div className="col">
                        <h3>Navigacija</h3>
                        <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <li class="cursor">Pradžia</li>
                        </Link>
                        <Link activeClass="active" to="aboutus" spy={true} smooth={true} duration={500}>
                            <li class="cursor">Apie Mus</li>
                        </Link>
                        <Link2 to="/login">
                        <li>Prisijungti</li>
                        </Link2>
                        <Link2 to="/register">
                        <li>Registracija</li>
                        </Link2>
                    </div>
                    <div className="col">
                        <h3>Kontaktai</h3>
                        <li>Elektroninis paštas :</li>
                        <p>AivarasPuodziunas9@gmail.com</p>
                        <li>Telefono Numeris :</li>
                        <p>+3706666666</p>
                        <li>Socialiniai Tinklai :</li>
                        <p>FaceBook : Aivaras Puodžiūnas</p>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Footer;