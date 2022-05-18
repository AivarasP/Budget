import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../assets/images/bp.jpg'
import './Login.css'

 function SignInPage() {
    return (
        <div className="text-center"style={HeaderStyle}>
            <h2 style={{fontSize:30}}>Prisijungti</h2>
            <form action="/home">
                <p>
                    <label>El. paštas</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Slaptažodis</label>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Prisijungti</button>
                </p>
                <div>Pirmas kartas? <Link to="/register"> Registracija</Link>.</div>
            </form>
        </div>
       
    )
    }const HeaderStyle = {
        width: "100%",
        height: "100vh",
        background: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    export default SignInPage;